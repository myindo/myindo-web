<script lang="ts">
	import { page } from '$app/state';
</script>

<div class="flex h-screen w-screen flex-col items-center justify-center">
	<div class="text-4xl font-bold">{page.status}: {page.error?.message}</div>
</div>
