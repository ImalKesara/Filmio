<script lang="ts">
	import { page } from '$app/stores';
	import '../app.css';
	let { children } = $props();
	let title = $derived($page.data.meta?.title ? `${$page.data.meta.title}` : `Filmio`);
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>
{@render children()}
