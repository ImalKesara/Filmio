<script lang="ts">
	import { Hero, Movies, Header, Footer, Pagination } from '$lib';
	let { data } = $props();
</script>

<Header />
<main class="mt-[4.5rem]">
	<Hero />
	<Movies {data} />
	<Pagination {data} />
</main>
<Footer />
