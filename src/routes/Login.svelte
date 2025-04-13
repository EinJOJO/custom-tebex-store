<script lang="ts">
	import { customer, login } from '$lib/tebex.svelte';
	import { json } from '@sveltejs/kit';

	let { onAbort, onFinish } = $props();
	let loginPromise: Promise<any> | undefined = $state(undefined);
	let input = $state('');
	let avatarUrl = $state(
		'https://starlightskins.lunareclipse.studio/render/mojavatar/default/full'
	);

	function updateAvatar() {
		if (input.length < 3) {
			avatarUrl = 'https://starlightskins.lunareclipse.studio/render/mojavatar/default/full';
			return;
		}
		avatarUrl = `https://starlightskins.lunareclipse.studio/render/mojavatar/${input}/full`;
	}
	function debounce(callback: any, wait: number) {
		let timeoutId: number | undefined;
		return () => {
			clearTimeout(timeoutId);
			timeoutId = window.setTimeout(() => {
				callback();
			}, wait);
		};
	}

	async function submit() {
		if (input.length < 3) {
			return;
		}
		loginPromise = login(input);
		await loginPromise;
		onFinish(input);
	}
</script>

<button onclick={onAbort} class="fixed inset-0 bg-black/30 z-10"
	><span class="sr-only">close</span></button
>
<div class=" fixed z-[100] inset-x-0 top-1/3 mx-auto max-w-xl px-4">
	<div class="rounded-lg border border-zinc-700 bg-zinc-900 p-4">
		<h2 class="text-2xl font-semibold text-zinc-50">Enter your name</h2>
		<div class="mt-16 flex gap-8">
			{#if loginPromise === undefined}
				<img src={avatarUrl} alt="Avatar" class="w-16" />
				<div class="w-full">
					<label for="user" class="mt-4 text-lg font-medium text-zinc-400">Username</label>
					<input
						id="user"
						oninputcapture={debounce(updateAvatar, 1200)}
						bind:value={input}
						type="text"
						placeholder="Name"
						class="mt-4 w-full rounded-lg border border-zinc-700 bg-zinc-800 p-2 text-zinc-50 focus:ring-2 focus:ring-teal-500 focus:outline-none"
					/>
				</div>
			{:else}
				<div class="text-2xl text-zinc-50">
					{#await loginPromise}
						<p>Loading</p>
					{:then res}
						<p>Logged in!</p>
					{:catch e}
						<p>Error: {e}</p>
					{/await}
				</div>
			{/if}
		</div>

		<button
			onclick={submit}
			class="mt-4 ml-auto block rounded-lg bg-teal-400 px-4 py-2 text-xl font-medium text-zinc-50 hover:bg-teal-600 hover:text-zinc-200"
		>
			Continue
		</button>
		<div class="mt-12">
			<h4 class="mb-3 text-xl font-bold text-zinc-50">What is my username</h4>
			<p class="text-xl text-zinc-300">
				Your username is the name you appear as on a Minecraft server.
			</p>
		</div>
	</div>
</div>
