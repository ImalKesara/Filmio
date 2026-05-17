<script lang="ts">
	import { Button } from 'bits-ui';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type ButtonProps = {
		children: Snippet;
	} & HTMLAttributes<HTMLButtonElement>;

	let { children }: ButtonProps = $props();
</script>

<Button.Root class="btn btn-primary">{@render children?.()}</Button.Root>
