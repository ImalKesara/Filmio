<script lang="ts">
	import { page } from '$app/stores';
	import { Header, Footer } from '$lib';
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};

	const defaultMeta = {
		title: 'Filmio',
		description: 'Filmio  Movies'
	};

	let { children }: Props = $props();
	let title = $derived(
		$page.data.meta?.title ? `${$page.data.meta.title} | Filmio` : defaultMeta.title
	);
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<Header />
<main class="mt-16">
	{@render children()}
</main>
<Footer />
