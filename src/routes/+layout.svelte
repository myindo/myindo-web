<script lang="ts">
	import { resolve } from '$app/paths';
	import myindo from '$lib/assets/myindo.png';
	import './layout.css';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={myindo} /></svelte:head>
<div class="bg-gray-950 text-white">
	<nav
		class="fixed top-0 z-50 flex w-full items-center justify-between px-6 py-4 backdrop-blur md:px-16 lg:px-24 xl:px-32"
	>
		<div>
			<a href="#!">
				<img
					alt="Logo"
					fetchpriority="high"
					width="140"
					height="40"
					decoding="async"
					data-nimg="1"
					class="h-9 w-auto shrink-0 md:h-9.5"
					style="color:transparent"
					src={myindo}
				/>
			</a>
		</div>
		<div class="flex flex-1 flex-col items-center lg:pr-10">
			<div class="hidden items-center md:flex md:gap-8 lg:gap-9">
				<a class="hover:text-slate-600 dark:hover:text-slate-300" href={resolve('/')}>Home</a>
				<a class="hover:text-slate-600 dark:hover:text-slate-300" href={resolve('/product')}
					>Product</a
				>
				<a class="hover:text-slate-600 dark:hover:text-slate-300" href={resolve('/team')}>Team</a>
				<a class="hover:text-slate-600 dark:hover:text-slate-300" href={resolve('/story')}>Story</a>
			</div>
			<div
				class="fixed inset-0 flex -translate-x-full flex-col items-center justify-center gap-6 bg-white/60 text-lg font-medium backdrop-blur-md transition duration-300 md:hidden dark:bg-black/40"
			>
				<a href={resolve('/')}>Home</a>
				<a href="#features">Features</a>
				<a href="#pricing">Pricing</a>
				<a href="#docs">Docs</a>
				<button>Sign in</button>
				<button
					aria-label="sign in"
					class="flex aspect-square size-10 items-center justify-center rounded-md bg-purple-600 p-1 text-white transition hover:bg-purple-700"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-x"
						aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg
					>
				</button>
			</div>
		</div>

		<div class="flex items-center gap-4">
			<button aria-label="menu" class="md:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="26"
					height="26"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-menu transition active:scale-90"
					aria-hidden="true"
					><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg
				></button
			>
		</div>
	</nav>
	{@render children()}
</div>
