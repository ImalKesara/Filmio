<script lang="ts">
	import { navigating } from '$app/state';
	import { Hero, Movies, Pagination } from '$lib';
	let { data } = $props();
</script>

<main class="container">
	{#if navigating.to}
		<div class="bg-base-100/70 absolute inset-0 z-50 flex items-center justify-center">
			<span class="loading loading-spinner loading-lg text-primary"></span>
		</div>
	{/if}

	<Hero />
	<Movies data={data.upcomingMovies} />
	<Pagination currentPage={data.currentPage} />
</main>
