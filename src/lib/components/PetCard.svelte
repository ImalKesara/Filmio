<script lang="ts">
	import PrimaryBtn from '$components/PrimaryBtn.svelte';
	let  {title,overview,poster_path}  = $props();
</script>

<div class="card mx-auto mt-5 w-96 bg-base-100 shadow-xl">
	<figure>
		<img src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt="Upcoming movies" />
	</figure>
	<div class="card-body items-center text-center">
		<h2 class="card-title">{title}</h2>
		<!-- <p>{overview.slice(0, 150) + '...'}</p> -->
		<div class="card-actions">
			<PrimaryBtn class="btn btn-primary shadow-md ">Buy now</PrimaryBtn>
		</div>
	</div>
</div>
