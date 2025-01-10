<script lang="ts">
	import PrimaryBtn from '$components/PrimaryBtn.svelte';

	let { movie } = $props();
	const randomText =
		'With his wife out sick, a struggling father brings home a lifelike AI, only to have his self-aware new help want everything her new family has to offer... Like the affection of her owner and she';
</script>

<div class="card mx-auto mt-5 w-96 bg-base-100 shadow-xl">
	<figure class="h-96 overflow-hidden">
		<img
			class="h-full w-full object-cover"
			src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
			alt="Upcoming movies"
		/>
	</figure>
	<div class="card-body items-center text-center">
		<h5 class="card-title">{movie.title.slice(0, 20)}</h5>
		<p class="text-sm">
			{movie.overview === '' ? randomText : movie.overview.slice(0, 100) + '...'}
		</p>
		<div class="card-actions">
			<PrimaryBtn class="btn btn-primary shadow-md ">Watch</PrimaryBtn>
		</div>
	</div>
</div>
