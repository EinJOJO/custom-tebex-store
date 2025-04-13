<script lang="ts">
	import { addProductToBasket, customer } from '$lib/tebex.svelte';
	import { fade, fly } from 'svelte/transition';

	let sidebar = $derived(customer.cartOpen);

function toggle() {
	customer.cartOpen = !customer.cartOpen;
}

function close() {
	customer.cartOpen = false;
}
</script>

<div class="fixed top-[4rem] right-[2rem]" >
	<button
		class=" rounded-lg bg-emerald-400 p-4"
		aria-label="cart"
		onclick={toggle}
	>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8">
			<path
				d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
			/>
		</svg>
	</button>
</div>
{#if sidebar}

	<div
		transition:fly={{ x: 100 }}
		class="fixed top-0 right-0 z-20 flex h-screen w-[30rem] flex-col gap-4 bg-zinc-900 p-8"
	>
		<div class="flex justify-between items-baseline">
			<h2 class="text-2xl font-semibold text-zinc-50">Cart</h2>
			<button onclick={close} class="text-2xl text-zinc-500">x</button>
		</div>
		{#if !!customer.basket}
			<div class="flex flex-col gap-4">
				{#each customer.basket.packages as item, i}
					<div class="flex items-center justify-between">
						<div class="flex gap-4">
							<p class="text-lg text-zinc-600">#{i + 1}</p>
							<div class="">
								<p class="text-lg text-zinc-200"> {item.name}</p>
								<div class="mt-4">
									<button onclick={(e) => {addProductToBasket(item.id, 1);}} class="text-zinc-300 bg-zinc-800 p-1 rounded-lg w-8 h-8">+</button>
								<input onchange={(e) => addProductToBasket(item.id, (e.target as any).value - item.in_basket.quantity)} class="text-zinc-300 bg-zinc-800 p-1 rounded-lg w-8 h-8 text-center border-0" value={item.in_basket.quantity}/>
								<button onclick={(e) => {addProductToBasket(item.id, -1);}}  class="text-zinc-300 bg-zinc-800 p-1 rounded-lg w-8 h-8">-</button>
								</div>
							</div>
						</div>
						
						
						<div class="text-right">
							<p><span class="text-lg text-zinc-500 ">{item.in_basket.price} {customer.basket.currency}</span></p>
                        <p class="text-lg text-zinc-200">{(item.in_basket.quantity * item.in_basket.price).toFixed(2)} {customer.basket.currency}</p>
						</div>
					</div>
				{/each}
			</div>
			<div class="mt-auto">
				<div class="text-lg text-zinc-200 grid grid-cols-2">
					<p>Subtotal:</p>
					<p class="text-right text-zinc-300">{customer.basket.base_price} {customer.basket.currency}</p>					
					<p>Tax:</p>
					<p class="text-right text-zinc-300">{customer.basket.sales_tax} {customer.basket.currency}</p>
					<p class="mt-4">Total:</p>
					<p class="mt-4 text-right font-bold">{customer.basket.total_price.toFixed(2)} {customer.basket.currency}</p>
				</div>
			
			
			<a href={customer.basket.links.checkout}  class="mt-8 p-4 block text-center {!customer.basket.links.checkout ? 'opacity-50 cursor-not-allowed ' : ''}  w-full text-teal-950 bg-teal-300 text-2xl rounded-md font-medium">Checkout</a>
			</div>
		{:else}
			<div class="flex items-center justify-center h-full">
				<p class="text-xl text-zinc-300">Your cart is empty</p>
			</div>
		{/if}
		
	</div>
{/if}
