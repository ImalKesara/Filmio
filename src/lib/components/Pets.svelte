<script lang="ts">
	import PetCard from './PetCard.svelte';

	type Props = {
		pets: { name: string }[];
	};
	let { pets }: Props = $props();
</script>

<section class="container">
	<h2 class="mb-4 text-4xl">Highlighted good boys and girls</h2>
	<ul class="grid grid-cols-1 items-center justify-center gap-12 md:grid-cols-2 lg:grid-cols-3">
		{#each pets as { name }}
			<li>
				<PetCard {name} />
			</li>
		{/each}
	</ul>
</section>
