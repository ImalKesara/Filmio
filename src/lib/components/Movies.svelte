<script lang="ts">
	import { MovieCard } from '$lib';
	let { data } = $props();
</script>

<section class="container">
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
		{#each data.results as movie (movie.id)}
			<MovieCard {movie} />
		{/each}
	</div>
</section>
