<script>
	import Section from '$lib/components/layout/section.svelte';
import { Timeline, TimelineItem, Button } from 'flowbite-svelte';
	import { ArrowRightOutline } from 'flowbite-svelte-icons';

    const sections = [
        { 
            date: '01',
            title: 'Software & App Development',
            description: 'Tell me what you need and I\'ll build it for you. Smooth iOS and android app? Website? Internal business application? API development? AI? Cloud or internally hosted? Whatever it is you need, send me an email or book a call.',
            imgSrc: '/services-dev.png',
            imgAlt: 'Software Development Image',
        },
        {
            date: '02',
            title: 'Startup Assistance',
            description: 'Beginning a startup? I\'ll provide whatever you need - from advice, MVP development, team lead, project management, and much more.',
            imgSrc: '/services-startup.png',
            imgAlt: 'Startup Image',
        },
        {
            date: '03',
            title: 'Architecture',
            description: 'Do you have a complex requirement? I can assist with designing not just the end product, but everything behind the scenes - so you can focus on scaling the business and the software will scale itself. Whether you have an offshore teams code regularly reviewed or want full development from me, I\'m flexible.',
            imgSrc: '/services-mngt.png',
            imgAlt: 'Management Image',
        },
        {
            date: '04',
            title: 'Consultancy',
            description: 'I provide consultancy in a wide range of areas for both non-technical business owners and developers looking to grow certain skills or gain advice on one of my open source projects.',
            imgSrc: '/services-consultancy.png',
            imgAlt: 'Consultancy Image',
        },
    ]
</script>
 
<Section id="services-section">
    <div class="px-10 sm:px-20 w-full max-w-[1400px]">
        <div class="flex flex-row justify-center py-10 sm:py-20">
            <h2 class="text-white text-4xl sm:text-5xl font-extrabold xl:mb-20">My Services</h2>
        </div>
        <Timeline>
            {#each sections as section}
            <div class="flex flex-col justify-between h-full md:flex-row mb-20 sm:mb-40">
                <div class="w-full sm:pb-10">
                    <TimelineItem title={section.title} date={section.date} classTime="!text-blue-400" classH3="text-2xl xl:text-3xl xl:pl-6 xl:pt-4">
                        <div class="w-full md:max-w-139 md:w-[45%] max-w-none xl:pl-6">
                            <p class="py-4 text-gray-200 font-normal text-normal sm:text-xl">
                                {section.description}
                            </p>

                        </div>
                    </TimelineItem>
                </div>
                <div class="justify-center pl-4 sm:pl-0 h-full md:max-w-[40%] lg:max-w-[30%] max-w-none w-full align-middle md:align-end flex">
                    <img 
                        class="w-auto lg:max-h-[319px] md:max-h-72 max-h-[250px]"
                        src={section.imgSrc}
                        alt={section.imgAlt}
                    />
                </div>
            </div>
            {/each}
        </Timeline>
    </div>
</Section>
