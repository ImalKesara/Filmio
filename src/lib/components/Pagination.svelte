<script lang="ts">
	import Button from './ui/button.svelte';

	let { currentPage } = $props();
</script>

<div class="join mt-6 flex items-center justify-center">
	<div class="join">
		<a href={`?page=${currentPage - 1}`} class="join-item btn">«</a>

		<!-- <Button class="join-item btn">Page {currentPage}</Button> -->

		<button class="join-item btn">Page {currentPage}</button>

		<a href={`?page=${currentPage + 1}`} class="join-item btn">»</a>
	</div>
</div>
