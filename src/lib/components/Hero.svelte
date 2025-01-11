<script lang="ts">
	import { Search } from '$lib';
</script>

<div class="container flex items-center justify-between max-sm:flex-col">
	<h1 class="text-3xl">Upcoming Movies</h1>
	<div class="flex items-center">
		<div class="dropdown">
			<div tabindex="0" role="button" class="btn m-1">Category</div>
			<ul tabindex="0" class="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow">
				<li><a>Movies</a></li>
				<li><a>Tv-shows</a></li>
			</ul>
		</div>
		<Search />
	</div>
</div>
