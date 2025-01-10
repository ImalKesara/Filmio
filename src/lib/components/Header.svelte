<script lang="ts">
	import {PrimaryBtn,ThemeToggleIcon} from '$lib';
</script>

<div class="navbar fixed z-50 text-sm bg-base-100 bg-transparent backdrop-filter backdrop-blur-md">
	<div class="flex-1">
		<a href="/" class="btn btn-ghost font-semibold">Filmio</a>
	</div>
	<div class="flex-none">
		<ul class="flex gap-3 px-1 items-center">
			<li><a href="/contact">Contact</a></li>
			<li>
				<!-- <PrimaryBtn onclick={window?.toggleTheme} class="btn btn-outline">mode</PrimaryBtn> -->
				<ThemeToggleIcon width={14} height={14} />
			</li>
		</ul>
	</div>
</div>
