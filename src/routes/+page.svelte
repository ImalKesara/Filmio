<script lang="ts">

	import { Hero, Movies, Pagination } from '$lib';
	let { data } = $props();
</script>

<main class="container">
	<Hero />
	<Movies data={data.upcomingMovies} />
	<Pagination currentPage={data.currentPage} />
</main>
