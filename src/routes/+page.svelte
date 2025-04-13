<script lang="ts">
    import DebugWindow from '$lib/components/DebugWindow.svelte';
    import wallpaper from '$lib/img/249489.jpg'
    import heroLines from '$lib/img/hero.svg'
	import { addProductToBasket, customer, loadFromLocalStorage } from '$lib/tebex.svelte';
	import { onMount } from 'svelte';
	import Cart from './Cart.svelte';
	import Login from './Login.svelte';
	import toast from 'svelte-french-toast';
    let loginModal = $state(false)

    let loadingPromise: Promise<any> | undefined = $state(undefined);
	onMount(() => {
		loadingPromise = loadFromLocalStorage();
	})
    function addToCart() {
        if (!!customer.username ) {
            addProductToBasket(6628163, 1)
        } else {
            loginModal = true
        }
    }

    function onFinish() {
        addProductToBasket(6628163, 1)
        loginModal = false
        
    }
</script>




{#if loginModal}
    <Login onAbort={() => {loginModal = false}} {onFinish} />
{/if}
<header class="bg-gradient-to-b from-teal-800  to-zinc-950 min-h-[42rem] relative py-24 overflow-hidden">
    <div class="relative px-8 max-w-5xl w-full mx-auto">
        <svg width="844" height="340" class="absolute top-[-7px] left-[-56px]" viewBox="0 0 844 340" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle opacity="0.2" cx="709" cy="53.9998" r="43.5" stroke="#F0FDFA"/>
            <circle opacity="0.2" cx="44" cy="54" r="43.5" stroke="#F0FDFA"/>
            <circle opacity="0.2" cx="505" cy="28.9998" r="18.5" stroke="#F0FDFA"/>
            <line opacity="0.2" x1="4.37114e-08" y1="10.5" x2="819" y2="10.5001" stroke="white"/>
            <line opacity="0.2" x1="87" y1="47.4999" x2="780" y2="47.5" stroke="white"/>
            <line opacity="0.2" x1="87" y1="60.4999" x2="767" y2="60.5" stroke="white"/>
            <line opacity="0.2" x1="1" y1="97.5" x2="763" y2="97.5001" stroke="white"/>
            <line opacity="0.2" x1="1" y1="228.5" x2="763" y2="228.5" stroke="white"/>
            <line opacity="0.2" x1="665.5" y1="-0.00015261" x2="665.5" y2="111" stroke="white"/>
            <line opacity="0.2" x1="87.5" y1="-0.000167869" x2="87.5" y2="234" stroke="white"/>
            <line opacity="0.2" x1="752.5" y1="-0.00015261" x2="752.5" y2="111" stroke="white"/>
            <line opacity="0.2" x1="486.5" y1="-0.00015261" x2="486.5" y2="339" stroke="white"/>
            <line opacity="0.2" x1="485.646" y1="339.199" x2="817.28" y2="7.56634" stroke="white"/>
            <line opacity="0.2" x1="511.646" y1="339.28" x2="843.28" y2="7.64644" stroke="white"/>
            </svg>
            
        <h1 class="text-5xl  font-black leading-none text-teal-50">INCREASE SALES <br/> AND PROFESSIONALISM</h1>
        <p class="text-2xl text-zinc-50 mt-8 tracking-tight ">
            Build a strong, recognizable brand <br/>
            Gain customer trust at first glance <br/>
            Fast, mobile-friendly design <br/>
        </p>
        <div class="flex flex-wrap  gap-4 my-16 lg:mt-0 lg:absolute -right-[194px] top-[4px]">
            <div class="bg-teal-800 shadow-xl flex flex-col justify-between  border-l border-teal-700 py-4 px-8">
                <p class="text-teal-300 text-2xl ">sales</p>
                <p class="text-teal-300 text-2xl font-medium">+98%</p>
            </div>
            <div class="bg-teal-800 shadow-xl border-l flex flex-col justify-between border-teal-700  py-4 px-8">
                <p class="text-teal-300 text-2xl ">returning <br> customers</p>
                <p class="text-teal-300 text-2xl md:mt-4 font-medium">+47%</p>
            </div>
            <div class="bg-teal-800 relative shadow-xl border-l flex flex-col justify-between border-teal-700  py-4 px-8">
                <p class="text-teal-300 text-2xl ">saved <br/> money</p>
                <p class="text-teal-300 text-2xl md:mt-4 font-medium">-12$ / m</p>
                <div class="absolute -bottom-6 left-0">
                    <p class="text-xs text-teal-600  ">Tebex Plus not required</p>
                </div>
            </div>
        </div>
        <div class="block">
            <button class="block text-2xl mb-4 text-teal-950 bg-teal-50 px-4 py-2 rounded-sm mt-8">
                Schedule a call
            </button>
            <a class=" text-2xl text-teal-100 mt-4 hover:underline " href="#" >Benefits of a custom store</a>
        </div>
        
        
        
    </div>
    

</header>
<main class="bg-zinc-950 min-h-screen relative py-12 px-4">
    <Cart />    
    <header class="max-w-5xl  p-8 rounded-lg mx-auto mb-12 wallpaper" style="background-image: url({wallpaper});">
        <h1 class="text-4xl text-indigo-50 uppercase font-bold">Make your minecraft <br/> store awesome</h1>        
        <p class="text-2xl font-medium mt-4 text-zinc-100 max-w-xl">Keep the decision easy, straight forward and reduce complexity in your store!</p>
    </header>
    <div class="mx-auto max-w-xl flex justify-center">
        <button class="text-zinc-400 text-center font-medium text-xl hover:underline hover:text-zinc-300">How does this work?</button>
    </div>
    <div class="flex justify-center mt-8 gap-8 flex-wrap max-w-5xl mx-auto">
            {@render item(5)}
            {@render item(10)}
            {@render item(18)}
    </div>
    
</main>



<style>
    .wallpaper {    
        background-size: cover;
        background-position: center;
    }
</style>


{#snippet item(price = 2)}
<div class="h-[30rem] bg-teal-100 max-w-[18rem] flex flex-col p-8 justify-between rounded-lg shadow">
    <img src="https://dunb17ur4ymx4.cloudfront.net/packages/images/8f14e89c72d4cb83f7734649102995ccf61e7bc2.png" alt="Logo" class="aspect-square max-w-xs">            
    
    <h3 class="font-bold text-teal-950 text-center text-xl"><span class="text-2xl">{price * 1000} </span><br/> Coins</h3>

    <button onclick={addToCart} class="bg-zinc-950 flex justify-center items-center gap-2 text-zinc-50 font-medium text-xl py-2 px-4 rounded-lg hover:bg-zinc-800 hover:text-zinc-200">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
          </svg>          
        {price} EUR
        
    </button>
</div>
{/snippet}