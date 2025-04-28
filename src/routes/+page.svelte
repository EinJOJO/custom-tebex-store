<script lang="ts">
	import DebugWindow from '$lib/components/DebugWindow.svelte';
	import wallpaper from '$lib/img/249489.jpg';
	import heroLines from '$lib/img/hero.svg';
	import { addProductToBasket, customer, loadFromLocalStorage } from '$lib/tebex.svelte';
	import { onMount } from 'svelte';
	import Cart from './Cart.svelte';
	import Login from './Login.svelte';
	import toast from 'svelte-french-toast';
	import Highlight from './Highlight.svelte';
	import type { PageProps } from './$types';
	import type { Package } from 'tebex_headless';
	const { data }: PageProps = $props();
	const products: Package[] = data.products;
	let loginModal = $state(false);
	let recentClickedItem: number = -1;

	let loadingPromise: Promise<any> | undefined = $state(undefined);
	onMount(() => {
		loadingPromise = loadFromLocalStorage();
	});
	function addToCart(itemId: number) {
		if (!!customer.username) {
			addProductToBasket(itemId, 1);
		} else {
			loginModal = true;
			recentClickedItem = itemId;
		}
	}

	function onFinish() {
		addProductToBasket(recentClickedItem, 1);
		loginModal = false;
	}
</script>

{#if loginModal}
	<Login
		onAbort={() => {
			loginModal = false;
		}}
		{onFinish}
	/>
{/if}
<header
	class="relative min-h-[42rem] overflow-hidden bg-gradient-to-b from-teal-800 to-zinc-950 py-24"
>
	<div class="relative mx-auto w-full max-w-5xl px-8">
		<svg
			width="844"
			height="340"
			class="absolute top-[-7px] left-[-56px]"
			viewBox="0 0 844 340"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle opacity="0.2" cx="709" cy="53.9998" r="43.5" stroke="#F0FDFA" />
			<circle opacity="0.2" cx="44" cy="54" r="43.5" stroke="#F0FDFA" />
			<circle opacity="0.2" cx="505" cy="28.9998" r="18.5" stroke="#F0FDFA" />
			<line opacity="0.2" x1="4.37114e-08" y1="10.5" x2="819" y2="10.5001" stroke="white" />
			<line opacity="0.2" x1="87" y1="47.4999" x2="780" y2="47.5" stroke="white" />
			<line opacity="0.2" x1="87" y1="60.4999" x2="767" y2="60.5" stroke="white" />
			<line opacity="0.2" x1="1" y1="97.5" x2="763" y2="97.5001" stroke="white" />
			<line opacity="0.2" x1="1" y1="228.5" x2="763" y2="228.5" stroke="white" />
			<line opacity="0.2" x1="665.5" y1="-0.00015261" x2="665.5" y2="111" stroke="white" />
			<line opacity="0.2" x1="87.5" y1="-0.000167869" x2="87.5" y2="234" stroke="white" />
			<line opacity="0.2" x1="752.5" y1="-0.00015261" x2="752.5" y2="111" stroke="white" />
			<line opacity="0.2" x1="486.5" y1="-0.00015261" x2="486.5" y2="339" stroke="white" />
			<line opacity="0.2" x1="485.646" y1="339.199" x2="817.28" y2="7.56634" stroke="white" />
			<line opacity="0.2" x1="511.646" y1="339.28" x2="843.28" y2="7.64644" stroke="white" />
		</svg>

		<h1 class="text-4xl leading-none font-black text-teal-50 md:text-5xl">
			INCREASE SALES <br /> AND PROFESSIONALISM
		</h1>
		<p class="mt-8 text-lg tracking-tight text-zinc-50 md:text-xl">
			Build a strong, recognizable brand <br />
			Gain customer trust at first glance <br />
			Fast, mobile-friendly design <br />
		</p>
		<div class="top-[4px] -right-[194px] my-16 flex flex-wrap gap-4 lg:absolute lg:mt-0">
			<div
				class="flex flex-col justify-between border-l border-teal-700 bg-teal-800 px-8 py-4 shadow-xl"
			>
				<p class="text-lg text-teal-300 md:text-xl">sales</p>
				<p class="text-lg font-medium text-teal-300 md:text-xl">+98%</p>
			</div>
			<div
				class="flex flex-col justify-between border-l border-teal-700 bg-teal-800 px-8 py-4 shadow-xl"
			>
				<p class="text-lg text-teal-300 md:text-xl">returning <br /> customers</p>
				<p class="text-lg font-medium text-teal-300 md:mt-4 md:text-xl">+47%</p>
			</div>
			<div
				class="relative flex flex-col justify-between border-l border-teal-700 bg-teal-800 px-8 py-4 shadow-xl"
			>
				<p class="text-lg text-teal-300 md:text-xl">saved <br /> money</p>
				<p class="text-lg font-medium text-teal-300 md:mt-4 md:text-xl">-12$ / m</p>
				<div class="absolute -bottom-6 left-0">
					<p class="text-xs text-teal-600">Tebex Plus not required</p>
				</div>
			</div>
		</div>
		<div class="block">
			<button class="mt-8 mb-4 block rounded-sm bg-teal-50 px-4 py-2 text-xl text-teal-950">
				Schedule a call
			</button>
			<a class=" mt-4 text-xl text-teal-100 hover:underline" href="#">Benefits of a custom store</a>
		</div>
	</div>
</header>
<main class="relative min-h-screen bg-zinc-950 px-4 py-12">
	<Cart />
	<header
		class="wallpaper mx-auto mb-12 max-w-5xl rounded-lg p-8"
		style="background-image: url({wallpaper});"
	>
		<h1 class="text-4xl font-bold text-indigo-50 uppercase">
			Make your minecraft <br /> store awesome
		</h1>
		<p class="mt-4 max-w-xl text-xl font-medium text-zinc-100">
			Keep the decision easy, straight forward and reduce complexity in your store!
		</p>
	</header>
	<div class="mx-auto flex max-w-xl justify-center">
		<button
			class="text-center text-xl font-medium text-zinc-400 hover:text-zinc-300 hover:underline"
			>How does this work?</button
		>
	</div>
	<div class="mx-auto mt-8 flex max-w-5xl flex-wrap justify-center gap-8">
		{#each products as _item}
			{@render item(_item)}
		{/each}
	</div>

	<Highlight />
</main>
<footer class="bg-zinc-900 text-xs text-zinc-100">
	<div class="flex flex-col justify-between gap-4 px-8 py-4 xl:flex-row xl:items-center">
		<div class="flex items-center lg:gap-2">
			<a href="https://www.tebex.io/?utm_source=store&amp;utm_campaign=1587757"
            aria-label="Tebex"
				><svg
					width="61"
					height="29"
					viewBox="0 0 61 29"
					class="fill-zinc-100 hidden lg:block"
					xmlns="http://www.w3.org/2000/svg"
					><path
						d="M7.22379 7.36903C8.42455 5.55275 10.5991 5.02655 10.5991 5.02655C10.5991 5.02655 6.44895 4.02049 6.44895 0C6.44895 4.02049 2.29644 5.02655 2.29644 5.02655C2.29644 5.02655 4.47176 5.55275 5.67331 7.36903H0V14.3322L1.28979 12.1758H3.86857V24.1932L9.02693 29V14.2859C7.71147 13.7208 5.8217 12.2842 5.14472 11.1885C6.30056 11.5136 7.85104 11.9411 9.05821 12.1766H12.8963V7.36903H7.22379Z"
					></path><g clip-path="url(#clip0_995_406)"
						><path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M35.9134 14.0983C36.5813 13.2542 37.62 12.7915 38.8665 12.7915H38.868C41.2702 12.7915 42.9475 14.4698 42.9475 16.8028C42.9475 19.1358 41.2194 20.8283 38.8357 20.8283C37.5616 20.8283 36.5474 20.3884 35.8888 19.5529L35.8457 20.6418H34.0253V9.87207H35.9134V14.0983ZM38.7342 19.3536C40.1961 19.3536 41.2163 18.3259 41.2163 16.8555C41.2163 15.3509 40.3084 14.3417 38.828 14.3417C37.3477 14.3417 36.3135 15.3381 36.3135 16.8555C36.3135 18.3728 37.2722 19.3536 38.7342 19.3536ZM22.7747 19.1045C22.3069 19.4347 21.9345 19.5628 21.4436 19.5628C20.7204 19.5628 20.3049 19.1557 20.3049 18.444V14.4271H23.3395V12.8812H20.3049V10.8742H18.4167V12.8798H17.1041L16.6763 14.4257H18.4167V18.4583C18.4167 20.2162 19.4277 21.1841 21.2651 21.1841C22.1038 21.1841 22.8517 20.945 23.5488 20.4525L23.5996 20.4169L22.8486 19.0518L22.7747 19.1031V19.1045ZM28.2885 12.7303C25.874 12.7303 24.1228 14.4242 24.1228 16.7572C24.1228 19.2127 25.7894 20.7984 28.367 20.7984C29.8396 20.7984 30.9399 20.3827 31.8263 19.4902L31.8725 19.4447L30.8707 18.3273L30.8107 18.3814C30.1197 19.0063 29.4057 19.2853 28.4916 19.2853C27.0574 19.2853 26.1756 18.5579 26.0017 17.2327H32.2049V17.1615C32.2049 17.0903 32.2079 17.0234 32.2125 16.9565C32.2172 16.8868 32.2202 16.817 32.2202 16.743C32.2202 14.3061 30.6768 12.7303 28.2885 12.7303ZM26.0402 16.0882C26.2803 14.9794 27.1482 14.2677 28.2731 14.2677C29.398 14.2677 30.1582 14.9295 30.3244 16.0882H26.0402ZM48.0719 12.7303C45.6575 12.7303 43.9062 14.4242 43.9062 16.7572C43.9062 19.2127 45.5728 20.7984 48.1504 20.7984C49.6231 20.7984 50.7234 20.3827 51.6097 19.4902L51.6559 19.4447L50.6541 18.3273L50.5941 18.3814C49.9032 19.0063 49.1891 19.2853 48.275 19.2853C46.8408 19.2853 45.9591 18.5579 45.7852 17.2327H51.9883V17.1615C51.9883 17.0903 51.9914 17.0234 51.996 16.9565C52.0006 16.8868 52.0037 16.817 52.0037 16.743C52.0037 14.3061 50.4602 12.7303 48.0719 12.7303ZM48.0565 14.2662C49.1984 14.2662 49.9416 14.9281 50.1078 16.0868H45.8237C46.0637 14.9779 46.9316 14.2662 48.0565 14.2662ZM60.2258 12.8798L57.2973 16.5708L60.5566 20.6418H58.313L56.2078 17.8633L54.1488 20.6418H52.016L55.1645 16.6733L52.1576 12.8798H54.4012L56.254 15.4078L58.0914 12.8798H60.2258Z"
						></path></g
					><defs
						><clipPath id="clip0_995_406"
							><rect
								width="43.8803"
								height="11.3121"
								fill="white"
								transform="translate(16.6763 9.87207)"
							></rect></clipPath
						></defs
					></svg
				></a
			>
			<p>
				This checkout process is operated by our online reseller &amp; Merchant of
				Record, Tebex Limited, who also handles order-related inquiries and refunds.
			</p>
		</div>
		<div class="flex items-center gap-2">
			<a class="underline" href="https://checkout.tebex.io/impressum">Impressum</a><a
				class="underline"
				href="https://checkout.tebex.io/terms">Terms of Service</a
			><a class="underline" href="https://checkout.tebex.io/privacy">Privacy Policy</a>
		</div>
	</div>
</footer>

{#snippet item(item: Package)}
	<div
		class="flex h-[30rem] max-w-[18rem] flex-col justify-between rounded-lg bg-teal-100 p-8 shadow"
	>
		<img
			src="https://dunb17ur4ymx4.cloudfront.net/packages/images/8f14e89c72d4cb83f7734649102995ccf61e7bc2.png"
			alt="Logo"
			class="aspect-square max-w-xs"
		/>

		<h3 class="text-center text-xl font-bold text-teal-950">
			<span class="text-xl">{item.base_price * 1000} </span><br /> Coins
		</h3>

		<button
			onclick={() => addToCart(item.id)}
			class="flex items-center justify-center gap-2 rounded-lg bg-zinc-950 px-4 py-2 text-xl font-medium text-zinc-50 hover:bg-zinc-800 hover:text-zinc-200"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				class="size-6"
			>
				<path
					d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
				/>
			</svg>
			{item.total_price}
			{item.currency}
		</button>
	</div>
{/snippet}

<style>
	.wallpaper {
		background-size: cover;
		background-position: center;
	}
</style>
