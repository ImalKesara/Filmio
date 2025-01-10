<script lang="ts">
	import { Hero, Pets, Header, Footer } from '$lib';
	let { data } = $props();
</script>

<Header />
<main class="mt-[4.5rem]">
	<Hero />
	<Pets {data} />
</main>
<Footer />
