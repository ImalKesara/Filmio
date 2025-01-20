<script lang="ts">
	// Supports weights 300-800
	import '@fontsource-variable/shantell-sans';
	import { page } from '$app/stores';
	import '../app.css';
	import { Header, Footer } from '$lib';
	import { onNavigate } from '$app/navigation';

	let { children } = $props();
	let title = $derived($page.data.meta?.title ? `${$page.data.meta.title}` : `filmio`);

	/* 
		View transitions 
		Default Transition (Fade)
	*/
	onNavigate((navigation) => {
		if (document.startViewTransition) {
			return new Promise((resolve) => {
				document.startViewTransition &&
					document.startViewTransition(async () => {
						resolve();
						await navigation.complete;
					});
			});
		}
	});
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>
<Header />
{@render children()}
<Footer />
