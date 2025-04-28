<script lang="ts">
	import wynncraft from '$lib/img/wynncraft-store.png';
	import manacube from '$lib/img/manacube.png';
</script>

<div class="mx-auto mt-64 flex max-w-6xl flex-wrap justify-center gap-8 px-8">
	{@render card(
		'Wynncraft Store',
		'https://store.wynncraft.com',
		'This store is the prime example of an outstanding shop page that differs from the competition.',
		wynncraft
	)}
	{@render card(
		'ManaCube Store',
		'https://store.manacube.net',
		'Even tough this is a tebex theme it matches the brand theme.',
		manacube
	)}
</div>

{#snippet card(name: string, href: string, description: string, imgsrc: string)}
	<div class="max-w-sm rounded-lg bg-zinc-800">
		<a  {href}>
			<img src={imgsrc} alt="Logo" class="w-full rounded-md" />
			<div class="p-4">
				<h3 class="flex items-center gap-4 text-xl font-semibold text-zinc-300">{name} <svg
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
						d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
					/>
				</svg></h3>
				

				<p class="mt-4 text-xl text-zinc-200">{description}</p>
			</div>
		</a>
	</div>
{/snippet}
