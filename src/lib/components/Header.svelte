<script lang="ts">
	import PrimaryBtn from '$components/PrimaryBtn.svelte';
	import ThemeSwicther from './ThemeSwicther.svelte';
</script>

<div class="navbar bg-base-100">
	<div class="flex-1">
		<a href="/" class="btn btn-ghost text-xl">Paulina Puppers</a>
	</div>
	<div class="flex-none">
		<ul class="flex gap-3 px-1">
			<li><a href="/">About</a></li>
			<li>
				<!-- <PrimaryBtn onclick={window?.toggleTheme} class="btn btn-outline">mode</PrimaryBtn> -->
				<ThemeSwicther />
			</li>
		</ul>
	</div>
</div>
