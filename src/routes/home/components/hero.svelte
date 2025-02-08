<script>
	import Section from '$lib/components/layout/section.svelte';
	import Button from '$lib/components/ui/button.svelte';
    import { HeroHeader } from 'flowbite-svelte-blocks';
    import { animateScroll } from "svelte-scrollto-element";

    // TODO contact page & remove this
    const handleScrollToContact = () => {
        console.log('scrolling to..')
        animateScroll.scrollTo({ element: '#contact-section', duration: 1000})
    }
  </script>
  
<Section id="hero-section">
    <div class="flex flex-row relative w-full rel pb-44">
        <div class="absolute left-[50%] md:left-145 right-0 top-39 z-0">
            <img class="w-full" src="/hero-bg2.png" alt="Hero background" />
        </div>
        <div class="jusify-center w-full">
            <div class="max-w-[1440px]">
                <div class="pt-28 lg:t-24 relative z-10 flex flex-col">
                    <div class="px-12 md:px-30 lg:px-48 relative z-10 pb-8">
                        <h1 class="text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold p-0 m-0">
                            Enterprise<br />Software<br />Development
                        </h1>
                    </div>
                    <div class="px-6 md:px-24 lg:px-42 flex flex-row align-middle pb-9">
                        <div class="w-[2px] sm:w-1 h-11 bg-blue-400"></div>
                        <div class="px-6 justify-center flex flex-col">
                            <span class="uppercase text-2xl md:text-4xl lg:text-4xl font-extrabold text-blue-400">The Dev You need</span>
                        </div>
                    </div>
                    <div class="px-12 md:px-30 lg:px-48 pb-12">
                        <p class="sm:max-w-141 p-0 m-0">
                            <span class="text-white text-lg font-medium">Get a range of technical services with a personal approach. I work solo, or integrate in your team as needed. You tell me what you need, and I'll sort it.</span>
                        </p>
                    </div>
                    <div class="px-12 md:px-30 lg:px-48">
                        <Button variant="solid" onclick={handleScrollToContact}>
                            Contact Me
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</Section>