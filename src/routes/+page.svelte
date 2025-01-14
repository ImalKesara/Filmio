<script lang="ts">
	import { Hero, Movies, Pagination } from '$lib';
	let { data } = $props();
</script>

<main class="container mt-[4.5rem]">
	<Hero />
	<Movies {data} />
	<Pagination {data} />
</main>

