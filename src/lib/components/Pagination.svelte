<script lang="ts">
	let { data } = $props();
	let totalPages = data.upcomingMovies.total_pages;
</script>

<div class="join mt-6 flex items-center justify-center">
	<input
		class="btn btn-square join-item"
		type="radio"
		name="options"
		aria-label="1"
		checked="checked"
	/>
	<input class="btn btn-square join-item" type="radio" name="options" aria-label="2" />
	<input class="btn btn-square join-item" type="radio" name="options" aria-label="3" />
	<input class="btn btn-square join-item" type="radio" name="options" aria-label="..." />
	<input class="btn btn-square join-item" type="radio" name="options" aria-label={totalPages} />
</div>
