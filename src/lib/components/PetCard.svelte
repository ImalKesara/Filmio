<script lang="ts">
	import PrimaryBtn from '$components/PrimaryBtn.svelte';

	let { movie } = $props();
	const randomText = '';
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
