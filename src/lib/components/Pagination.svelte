<script lang="ts">
	import Button from './ui/button.svelte';

	let { currentPage } = $props();
</script>

<div class="join mt-6 flex items-center justify-center">
	<a href={`?page=${currentPage - 1}`} class="btn btn-square join-item">Prev</a>

	<Button>{currentPage}</Button>

	<a href={`?page=${currentPage + 1}`} class="btn btn-square join-item">Next</a>
</div>
