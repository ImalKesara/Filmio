<script lang="ts">
	import { ThemeToggleIcon } from '$lib';
</script>

<div class="navbar fixed z-50 bg-base-100 bg-transparent text-sm backdrop-blur-md backdrop-filter">
	<div class="flex-1">
		<a href="/" class="btn btn-ghost font-semibold">Filmio</a>
	</div>

	<div class="flex-none">
		<ul class="flex items-center gap-3 px-1">
			<li><a href="/contact">Contact</a></li>
			<li>
				<!-- <PrimaryBtn onclick={window?.toggleTheme} class="btn btn-outline">mode</PrimaryBtn> -->
				<ThemeToggleIcon width={14} height={14} />
			</li>
		</ul>
	</div>
</div>
