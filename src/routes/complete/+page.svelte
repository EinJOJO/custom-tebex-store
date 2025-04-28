<script>
    import { onMount } from 'svelte';
    import { page } from '$app/state';

    let orderId = '';

    onMount(() => {
        orderId = page.url.searchParams.get('txn-id') || 'No Order ID found';
    });
</script>

<div class="flex items-center justify-center h-screen bg-zinc-900 text-white flex-col gap-8">
    <h1 class="text-xl block text-white font-bold">Order ID: {orderId}</h1> 
    <a class="text-xl block" href="/">Go back</a>
</div>