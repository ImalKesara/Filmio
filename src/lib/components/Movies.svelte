<script lang="ts">
	import { MovieCard } from '$lib';
	let { data } = $props();
	console.log(data.upcomingMovies.results);
</script>

<section class="container">
	
	<ul class="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4">
		<!-- or can pass {...movie} like this -->
		{#each data.upcomingMovies.results as movie}
			<li>
				<MovieCard {movie} />
			</li>
		{/each}
	</ul>
</section>
