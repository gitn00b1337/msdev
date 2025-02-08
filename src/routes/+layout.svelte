<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import '../app.css';
	import Footer from '$lib/components/layout/footer.svelte';
	import Navbar from '$lib/components/layout/navbar.svelte';
	import "../app.postcss"; 

	let { children } = $props();
</script>

<ParaglideJS {i18n}>
	<div class="flex flex-col min-h-full relative">
		<Navbar></Navbar>

		<main class="min-h-full relative">
			{@render children()}
		</main>

		<Footer />
	</div>
</ParaglideJS>
