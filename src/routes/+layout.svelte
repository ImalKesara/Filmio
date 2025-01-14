<script lang="ts">
	// Supports weights 300-800
	import '@fontsource-variable/shantell-sans';
	import { page } from '$app/stores';
	import '../app.css';
	import { Header, Footer } from '$lib';

	let { children } = $props();
	let title = $derived($page.data.meta?.title ? `${$page.data.meta.title}` : `Filmio`);
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>
<Header />
{@render children()}
<Footer />
