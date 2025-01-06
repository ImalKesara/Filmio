<script lang="ts">
	import PetCard from './PetCard.svelte';

	type Props = {
		upcomingMovies: {
			id: number;
			title: string;
			overview: string;
			release_date: string;
			vote_average: number;
			vote_count: number;
			poster_path: string;
			backdrop_path: string;
		}[];
	};
	let { upcomingMovies }: Props = $props();
	for (let movie of upcomingMovies) {
		console.log(movie.title);
	}
</script>

<section class="container">
	<ul
		class="grid grid-cols-1 items-center justify-items-center md:grid-cols-2 lg:grid-cols-3"
	>
	<!-- or can pass {...movie} like this -->
		{#each upcomingMovies as { title, overview, poster_path }}
			<li>
				<PetCard {title} {overview} {poster_path} />
			</li>
		{/each}
	</ul>
</section>
