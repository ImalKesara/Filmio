<script lang="ts">
	let { movie } = $props();
	import Button from './ui/button.svelte';

	let isLoaded = $state(false);

	$effect(() => {
		isLoaded = false;
	});

	const randomText =
		'With his wife out sick, a struggling father brings home a lifelike AI, only to have his self-aware new help want everything her new family has to offer... Like the affection of her owner and she';
</script>

<div class="card bg-base-100 mx-auto mt-5 w-68 shadow-xl">
	{#if !isLoaded}
		<div class="skeleton card absolute inset-0 h-full w-full"></div>
	{/if}

	<figure class="h-90 overflow-hidden">
		<img
			src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
			alt={movie.title}
			onload={() => (isLoaded = true)}
			class="h-full w-full object-cover transition-opacity duration-300 {isLoaded
				? 'opacity-100'
				: 'opacity-0'}"
		/>
	</figure>
	<div class="card-body items-center text-center">
		<h5 class="card-title text-md font-fancy">{movie.title.slice(0, 20)}</h5>
		<p class="text-xs">
			{movie.overview === '' ? randomText : movie.overview.slice(0, 70) + '...'}
		</p>

		<div class="card-actions">
			<Button>Watch</Button>
		</div>
	</div>
</div>
