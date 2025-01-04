<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = {
		children: Snippet;
	} & HTMLAttributes<HTMLButtonElement>;
	// previously i used HTMLAnchorElement because of it it complains me wrong i used HTMLAnchorElement instead of using HTMLButtonElement
	// that html line -> need to work restProps

	let { children, ...restProps }: Props = $props();
</script>

<button {...restProps}>{@render children()}</button>
