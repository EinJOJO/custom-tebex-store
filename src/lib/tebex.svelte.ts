import { page } from "$app/state"
import { env } from "$env/dynamic/public"
import { onMount } from "svelte"
import toast from "svelte-french-toast"
import { TebexHeadless, type Basket } from "tebex_headless"

export const storeID = env.PUBLIC_TEBEX_WEBSTORE_ID || "undefined"
export const tebex = new TebexHeadless(storeID)

export let customer: {
    cartOpen: boolean
    username: string | undefined
    basket: Basket | undefined
} =  $state({
    cartOpen: false,
    username: undefined,
    basket: undefined
})


export async function loadFromLocalStorage() {
    try {
        const basket = localStorage.getItem("basket")
        if (basket) {
            customer.basket = await tebex.getBasket(basket)
            var nullable = customer.basket?.username
            if (customer.basket?.complete) {
                customer.basket = undefined
            }
            if (nullable) {
                customer.username = nullable
                if (!customer.basket) {
                    login(customer.username);
                }
                return;
            }       
            
            console.log("Loaded basket from local storage", customer.basket)
        }        
    } catch(e) {
        toast.error("Failed to load basket!")
        console.error("Failed to load basket from local storage", e)
        localStorage.setItem("basket", "")
        
    }
    customer.username = undefined
    customer.basket = undefined

}

export async function login(username: string) {    
    const basketPromise = tebex.createMinecraftBasket(username, page.url.origin + "/complete", page.url.origin + "?cancel");
    toast.promise(basketPromise, {
        loading: "Login in...",
        success: "Welcome!",
        error: "Failed to login."
    })
    
    customer.username = username
    customer.basket = await basketPromise;
    localStorage.setItem("basket", (customer.basket.ident))
}

export async function logout() {
    customer.username = undefined
    customer.basket = undefined    
    toast.success("Logged out")
}


export async function addProductToBasket(packageID: number, quantity: number) {
    if (!customer.basket) {
        toast.error("No basket available");
        return;
    }
    const promise =  tebex.addPackageToBasket(customer.basket.ident, packageID, quantity)    
    toast.promise(promise, {
        loading: "Adding to basket...",
        success: "Added to basket",
        error: "Failed to add to basket"
    })
    customer.basket = await promise;
    customer.cartOpen = true        
}

export async function removeProductFromBasket(packageID: number) {
    if (!customer.basket) {
        throw new Error("Basket is not initialized")
    }
    customer.basket = await tebex.removePackage(customer.basket.ident, packageID) 
}