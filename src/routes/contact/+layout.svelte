<script lang="ts">
	import { page } from '$app/stores';
	import { Header, Footer } from '$lib';
	import type { Snippet } from 'svelte';
	import '../../app.css'

	type Props = {
		children: Snippet;
	};

	const defaultMeta = {
		title: 'filmio',
		description: 'filmio  Movies'
	};

	let { children }: Props = $props();
	let title = $derived(
		$page.data.meta?.title ? `${$page.data.meta.title} | filmio` : defaultMeta.title
	);
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<main class="mt-16">
	{@render children()}
</main>
