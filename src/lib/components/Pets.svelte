<script lang="ts">

	import PetCard from './PetCard.svelte';

	let { data } = $props();
	console.log(data.upcomingMovies);
</script>

<section class="container">
	<ul class="grid grid-cols-1 items-center justify-items-center md:grid-cols-2 lg:grid-cols-3">
		<!-- or can pass {...movie} like this -->
		{#each data.upcomingMovies as movie}
			<li>
				<PetCard {movie} />
			</li>
		{/each}
	</ul>
</section>
