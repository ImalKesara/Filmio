<script lang="ts">
	import { Hero, Pets, Header, Footer } from '$lib';
	let { data } = $props();
	const pets = [
		{ name: 'Tom' },
		{ name: 'Jerry' },
		{ name: 'Reacher' },
		{ name: 'Jack' },
		{ name: 'Crus' },
		{ name: 'random' },
		{ name: 'jaguar' },
		{ name: 'holy' }
	];
</script>

<Header />
<Hero />
<Pets {...data} />
<Footer />
