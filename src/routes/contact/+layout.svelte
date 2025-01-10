<script lang="ts">
	import { Header, Footer } from '$lib';
	import type { Snippet } from 'svelte';
	type Props = {
		children: Snippet;
	};
	let { children }: Props = $props();
</script>

<Header />
<main class="mt-16">
	{@render children()}
</main>
<Footer />
