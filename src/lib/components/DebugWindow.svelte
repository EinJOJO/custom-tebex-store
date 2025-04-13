<script lang="ts">
	import { customer } from '$lib/tebex.svelte';
	import { fade, fly } from 'svelte/transition';

	let fullscreen = $state(false);
	let hidden = $state(true);
	let minimized = $state(true);

	function close() {
		hidden = true;
	}

	function mini() {
		if (hidden) {
			hidden = false;
			minimized = false;
		} else {
			hidden = true;
			minimized = true;
		}
	}
	function full() {
		fullscreen = !fullscreen;
	}
</script>

{#if minimized}
	<button
		onclick={mini}
		class="repeating-glow absolute bottom-4 left-1 z-[99] flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-200 opacity-100 hover:opacity-70 sm:left-4 sm:h-12 sm:w-12"
		transition:fade
	>
		<span class="sr-only">view error</span>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="size-6"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
			/>
		</svg>
	</button>
{/if}
{#if !hidden}
	<div
		transition:fly={{ x: -100, y: 0 }}
		class={'absolute z-[99] max-h-[90vh] min-w-xl overflow-auto bg-zinc-900 backdrop-blur-xl transition-all duration-100 sm:max-h-[80vh] ' +
			(fullscreen
				? ' inset-0 top-2'
				: 'right-2 bottom-4 left-2 w-[95%] rounded-lg sm:right-auto sm:left-10 sm:w-auto sm:max-w-[90%]')}
	>
		<div class="sticky flex justify-between items-center top-0 pt-2 w-full bg-black/10 px-8 backdrop-blur-3xl">
			<svg
				class=" inline size-6 text-zinc-200"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
				/>
			</svg>

			<div class=" flex flex-row-reverse gap-3">
				<button
					onclick={close}
					class="h-4 w-4 cursor-pointer rounded-full bg-red-400 hover:bg-red-500"
					aria-label="Close"
				></button>
				<button
					onclick={full}
					class="h-4 w-4 cursor-pointer rounded-full bg-emerald-500 hover:bg-emerald-600"
					aria-label="Fullscreen"
				></button>
				<button
					onclick={mini}
					class="h-4 w-4 cursor-pointer rounded-full bg-amber-400 hover:bg-amber-500"
					aria-label="Minimize"
				></button>
			</div>
		</div>

		<pre
			class="overflow-x-auto rounded-lg px-2 pt-12 pb-4 text-xs sm:px-8 sm:text-sm md:text-base"><code
				class="text-zinc-100">{JSON.stringify(customer, null, 4)}</code
			></pre>
	</div>
{/if}

<style>
	@keyframes glow {
		0% {
			box-shadow: 0 0 8px 2px rgba(255, 86, 0, 0.3);
			background-color: var(--color-zinc-900);
		}
		50% {
			box-shadow: 0 0 15px 5px rgba(255, 86, 0, 0.5);
			background-color: var(--color-zinc-800);
		}
		100% {
			box-shadow: 0 0 8px 2px rgba(255, 86, 0, 0.3);
			background-color: var(--color-zinc-900);
		}
	}
	.repeating-glow {
	}
</style>
