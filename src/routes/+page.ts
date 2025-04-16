import { tebex } from "$lib/tebex.svelte"
import type { PageLoad } from "./$types"

const products = [
    6628163, 6788006, 6788007
]
export const load: PageLoad = async ({params}) => {
    const [firstPackage] = await tebex.getCategories(true);
    
    
    return {
        products: (firstPackage.packages)
    };
}