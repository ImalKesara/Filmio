<script lang="ts">
	import { Header,Footer } from '$lib';
	import type { Snippet } from 'svelte';
	type Props = {
		children: Snippet;
	};
	let { children }: Props = $props();
</script>

<Header />
{@render children()}
<Footer />