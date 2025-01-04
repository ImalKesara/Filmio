<script lang="ts">
	import Header from '$components/Header.svelte';
	import PrimaryBtn from '$components/PrimaryBtn.svelte';
	import { Hero, Pets } from '$lib';
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
<Pets {pets} />
