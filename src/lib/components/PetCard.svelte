<script lang="ts">
	import PrimaryBtn from '$components/PrimaryBtn.svelte';
	let { name } = $props();
</script>

<div class="card mx-auto w-96 bg-base-100 shadow-xl">
	<figure>
		<img
			src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
			alt="Pets"
		/>
	</figure>
	<div class="card-body items-center text-center">
		<h2 class="card-title">{name}</h2>
		<p>If a dog chews shoes whose shoes does he choose?</p>
		<div class="card-actions">
			<PrimaryBtn class="btn btn-secondary">Buy now</PrimaryBtn>
		</div>
	</div>
</div>


