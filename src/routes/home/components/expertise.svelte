<script>
	import Section from "$lib/components/layout/section.svelte";
import NavButton from "$lib/components/ui/nav-button.svelte";
	import { animateScroll } from "svelte-scrollto-element";

    const expertise = [
        {
            title: 'Secure Software',
            description: 'Avoiding attack vectors requires security by design, with thoughtful architecture and following all security best practices.',
            link: '/secure-software',
        },
        {
            title: 'Full Stack Development',
            description: 'Get a full service - from user UI to server API and everything inbetween. Full development - full service.',
            link: '/full-stack-development',
        },
        {
            title: 'E2E Testing',
            description: 'Make sure your products work reliably every time with well-tested automated testing.',
            link: '/end-to-end-testing',
        },
        {
            title: 'Business First Service',
            description: 'Great software development isn\'t just coding. Get the right solution for your organisation\'s circumstances.',
            link: '/business-first-development',
        },
    ]
</script>

<Section>
    <div class="p-10 sm:p-20 flex flex-col lg:flex-row gap-15 lg:gap-18 xl:gap-20 justify-between xl:px-0 w-full max-w-[1500px]">
        <div class="w-full xl:max-w-140">
            <div>
                <h2 class="text-white text-3xl sm:text-5xl font-extrabold mb-6">Technical Expertise</h2>
            </div>
            <div>
                <p class="text-gray-400 text-l sm:text-lg font-medium">
                    I strive to deliver high quality software that exceeds client expectations. Here are a few of my specialities.
                </p>
            </div>
        </div>
        <div class="w-full">
            {#each expertise as item}
            <div class="sm:p-4 border-b-[1px] border-b-gray-300 mb-3 flex flex-col xl:h-37 pb-8">
                <h3 class="text-white text-2xl sm:text-3xl font-medium mb-6 xl:mb-2 leading-tight">
                    {item.title}
                </h3>
                <div class="w-full lg:w-auto">
                    <div class="flex flex-col sm:flex-row pr-17 justify-between w-full lg:w-auto">
                        <p class="text-gray-100 text-l md:max-w-90 lg:max-w-120 mb-10 sm:mb-0">
                            {item.description}
                        </p>
                        <div class="sm:w-auto sm:ml-12 flex flex-row sm:flex-col xl:pb-5 justify-end sm:justify-end">
                            <NavButton href={'#'} onclick={() => animateScroll.scrollTo({ element: '#contact-section', duration: 1000})}>
                                Discover
                            </NavButton>
                        </div>
                    </div>
                </div>
            </div>
            {/each}
        </div>
    </div>
</Section>