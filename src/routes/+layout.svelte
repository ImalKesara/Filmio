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
		Default Transition (Fade) , some browsers are not supported yet (firefox,safari) so that's we use if condition
		navigation.from?.route.id !== navigation.to?.route.id -> works when stay in same url
	*/
	onNavigate((navigation) => {
		if (document.startViewTransition && navigation.from?.route.id !== navigation.to?.route.id) {
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

<style>
	@keyframes fade-out {
		to {
			opacity: 0;
		}
	}

	@keyframes slide-from-right {
		from {
			transform: translateX(100%);
		}
	}

	:root::view-transition-old(root) {
		animation: 450ms ease-out both fade-out;
	}

	:root::view-transition-new(root) {
		animation: 450ms ease-out both slide-from-right;
	}
</style>
