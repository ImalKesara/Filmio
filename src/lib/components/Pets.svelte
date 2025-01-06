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
</script>

<section class="container">
	<ul class="grid grid-cols-1 items-center justify-center gap-12 md:grid-cols-2 lg:grid-cols-3">
		{#each upcomingMovies as Movie }
			<li>
				<PetCard {...Movie} />
			</li>
		{/each}
	</ul>
</section>
