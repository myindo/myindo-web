<script>
	import { resolve } from '$app/paths';
	import myindo from '$lib/assets/myindo.png';
</script>

<div>
	<div
		class="flex flex-col items-center justify-center bg-gray-800 bg-cover bg-no-repeat px-4 pt-36 pb-24 text-center dark:bg-gray-900"
	>
		<h1 class="max-w-2xl text-5xl/15 font-semibold md:text-[64px]/19">
			Every problem ends with
			<span
				class="bg-linear-to-r from-[#ef683f] to-[#e89c5d] bg-clip-text text-transparent dark:from-[#ffc99d] dark:to-[#ffe3c9]"
				>solutions</span
			>
		</h1>
		<p class="mt-2 max-w-lg text-base dark:text-slate-300">
			We create a technology solution so you can build, and grow faster.
		</p>
		<!-- <div class="mt-8 flex items-center gap-4">
			<a
				class="flex h-11 items-center justify-center rounded-md bg-orange-600 px-6 text-white transition hover:bg-orange-700"
				href="/product">Our Products</a
			>
		</div> -->
	</div>
	<div>
		<p
			class="mx-auto mt-28 w-max rounded-full border border-slate-300 bg-slate-50 px-10 py-2 text-center font-medium text-indigo-600 dark:border-slate-700 dark:bg-slate-900 dark:text-indigo-400"
		>
			FEATURES
		</p>
		<h3 class="mx-auto mt-4 text-center text-3xl font-semibold">
			Adapt & Customized for your needs
		</h3>
		<p class="mx-auto mt-2 max-w-lg text-center text-slate-600 dark:text-slate-300">
			Web, mobiles, IOT — everything you need to ship.
		</p>
		<div
			class="mt-10 flex flex-wrap items-center justify-center gap-6 px-6 md:gap-4 md:px-16 lg:px-24 xl:px-32"
		>
			<div
				class="max-w-80 space-y-3 rounded-xl border border-slate-200 bg-white p-6 md:max-w-66 dark:border-slate-800 dark:bg-slate-800/20"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.3"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-zap mt-4 size-8 text-purple-500"
					aria-hidden="true"
					><path
						d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
					></path></svg
				>
				<h3 class="text-base font-medium">Lightning-fast Development</h3>
				<p class="line-clamp-2 text-slate-400">
					Launch prod-ready solution in months with prebuilt app.
				</p>
			</div>
			<div
				class="max-w-80 space-y-3 rounded-xl border border-slate-200 bg-white p-6 md:max-w-66 dark:border-slate-800 dark:bg-slate-800/20"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.3"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-thumbs-up mt-4 size-8 text-purple-500"
					aria-hidden="true"
					><path d="M7 10v12"></path><path
						d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"
					></path></svg
				>
				<h3 class="text-base font-medium">Quality Excelent</h3>
				<p class="line-clamp-2 text-slate-400">Customer Statisfaction-driven for every solution.</p>
			</div>
			<div
				class="max-w-80 space-y-3 rounded-xl border border-slate-200 bg-white p-6 md:max-w-66 dark:border-slate-800 dark:bg-slate-800/20"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.3"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-shapes mt-4 size-8 text-purple-500"
					aria-hidden="true"
					><path
						d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"
					></path><rect x="3" y="14" width="7" height="7" rx="1"></rect><circle
						cx="17.5"
						cy="17.5"
						r="3.5"
					></circle></svg
				>
				<h3 class="text-base font-medium">Highly Customizable</h3>
				<p class="line-clamp-2 text-slate-400">Modular Feature make customization trivial.</p>
			</div>
		</div>

		<div class="mt-20 flex flex-col items-center justify-center text-center" id="getstarted">
			<h3 class="mt-16 mb-4 text-3xl font-semibold">Ready to Get Started?</h3>
			<p class="mx-auto max-w-xl text-slate-600 dark:text-slate-200">
				Join thousands of satisfied customers and transform your business today.
			</p>
			<div class="mt-8 flex items-center gap-4">
				<button
					class="h-11 rounded-md bg-orange-600 px-6 text-white transition hover:bg-orange-700"
				>
					Request Demo
				</button>
				<button
					class="h-11 rounded-md border border-orange-900 px-6 text-slate-600 transition dark:text-white"
				>
					Contact sales
				</button>
			</div>
		</div>
	</div>

	<!--$--><!--/$-->
	<footer class="relative mt-40 w-full px-6 md:px-16 lg:px-24 xl:px-32 dark:text-slate-50">
		<div
			class="flex w-full flex-col justify-between gap-10 border-b border-gray-200 pb-6 md:flex-row dark:border-slate-700"
		>
			<div class="md:max-w-114">
				<a href={resolve('/')}
					><img
						alt="Logo"
						fetchpriority="high"
						width="140"
						height="40"
						decoding="async"
						data-nimg="1"
						class="h-9 w-auto shrink-0 md:h-9.5"
						style="color:transparent"
						src={myindo}
					/></a
				>
				<p class="mt-6">
					Launch your product in record time with our all-in-one platform designed for speed,
					flexibility and growth.
				</p>
			</div>
			<div class="flex flex-1 items-start gap-20 md:justify-end">
				<div>
					<h2 class="mb-5 font-semibold">Company</h2>
					<ul class="space-y-2">
						<li><a class="transition hover:text-orange-600" href={resolve('/')}>Home</a></li>
						<li>
							<a class="hover:text-slate-600 dark:hover:text-slate-300" href={resolve('/product')}
								>Product</a
							>
						</li>
						<li>
							<a class="hover:text-slate-600 dark:hover:text-slate-300" href={resolve('/team')}
								>Team</a
							>
						</li>
						<li>
							<a class="hover:text-slate-600 dark:hover:text-slate-300" href={resolve('/story')}
								>Story</a
							>
						</li>
					</ul>
				</div>
				<div>
					<h2 class="mb-5 font-semibold">Legal</h2>
					<ul class="space-y-2">
						<li>
							<a class="hover:text-slate-600 dark:hover:text-slate-300" href={resolve('/privacy-policy')}>Privacy Policy</a>
						</li>
						<li>
							<a class="hover:text-slate-600 dark:hover:text-slate-300" href={resolve('/disclaimer')}>Disclaimer</a>
						</li>
						<li>
							<a class="hover:text-slate-600 dark:hover:text-slate-300" href={resolve('/terms-and-conditions')}>Terms & Conditions</a>
						</li>
					</ul>
				</div>
				<div>
					<h2 class="mb-5 font-semibold">Get in touch</h2>
					<div class="space-y-2">
						<p>+62 851-9551-8581</p>
						<p>halo@myindo.co.id</p>
					</div>
				</div>
			</div>
		</div>
		<p class="pt-4 pb-5 text-center">
			Copyright 2026 • PT Myindo Cyber Media • All Right Reserved.
		</p>
	</footer>
</div>
