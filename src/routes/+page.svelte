<script lang="ts">
	import { Hero, Pets, Header, Footer } from '$lib';
	let { data } = $props();
</script>

<Header />
<Hero />
<Pets {data} />
<Footer />
