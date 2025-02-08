<script>
	import Approach from "./components/approach.svelte";
	import BrandBanner from "./components/brand-banner.svelte";
	import Collaborate from "./components/collaborate.svelte";
	import Expertise from "./components/expertise.svelte";
  import Hero from "./components/hero.svelte";
	import Services from "./components/services.svelte";
	import Testimonials from "./components/testimonials.svelte";
</script>

<svelte:head>
    <title>MS Enterprise Development</title>
</svelte:head>

<div class="min-h-[100vh] relative">
  <Hero />
  <Approach />
  <BrandBanner />
  <!-- <Work /> -->
  <Services />
  <Expertise />
  <Testimonials />
  <Collaborate />
</div>
