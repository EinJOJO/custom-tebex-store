<script lang="ts">
	import { Toaster } from 'svelte-french-toast';
	import '../app.css';
	import DebugWindow from '$lib/components/DebugWindow.svelte';
	import { loadFromLocalStorage } from '$lib/tebex.svelte';
	import { onMount } from 'svelte';

	let { children } = $props();

	
</script>

<Toaster />
<DebugWindow />
{@render children()}	


