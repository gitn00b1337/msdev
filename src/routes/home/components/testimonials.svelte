<script lang="ts">
	import Section from "$lib/components/layout/section.svelte";
    import { Quotes, Testimonial, TestimonialCard, TestimonialCardItem } from "flowbite-svelte-blocks";
    import { Testimonials } from '$lib/data/testimonials';
	import Logo from "$lib/data/logos/logo.svelte";

    let index = $state(0);
    let testimonial = $derived(Testimonials[index]);

    function handleIndexChange(adjust: number) {
        let newIndex = index + adjust;

        if (newIndex < 0) {
            newIndex = Testimonials.length - 1;
        } else if (newIndex >= Testimonials.length) {
            newIndex = 0;
        }

        index = newIndex;
    }
</script>


<Section id="testimonials-section" class="bg-white">
    <div class="p-20 w-full justify-center flex flex-row">
        <div class="">
            <div class="mb-16">
                <h2 class="text-black text-5xl font-extrabold mb-12">Testimonials</h2>
            </div>
            <div class="flex flex-col lg:flex-row">
                <div class="">
                    <Quotes 
                        svgCls="h-20 sm:h-30 text-black"
                    />
                </div>
                <div class="lg:pt-36 lg:pl-4 xl:pl-60 flex flex-col gap-14">
                    <div class="flex flex-row h-6 gap-4 justify-between lg:justify-start">
                        <button 
                            class="pr-8 cursor-pointer hover:opacity-70"
                            onclick={() => handleIndexChange(-1)}
                        >
                            <img 
                                src="/chevron-left.svg" 
                                alt="paginate left icon"
                            />
                        </button>
                        <button 
                            class="pr-8 cursor-pointer hover:opacity-70"
                            onclick={() => handleIndexChange(1)}
                        >
                            <img 
                                src="/chevron-right.svg" 
                                alt="paginate right icon"
                            />
                        </button>
                    </div>

                    <div class="max-w-160 min-h-50 sm:min-h-90 md:min-h-60 lg:min-h-40">
                        <p class="text-gray-600 text-l sm:text-2xl font-normal">
                            {testimonial.quote}
                        </p> 
                    </div>

                    <div class="flex flex-col lg:flex-row gap-2 lg:gap-12">
                        <div class="text-black h-14 max-w-60 lg:w-80 relative flex justify-center flex-col">
                            <Logo brand={testimonial.svg} 
                                height={null}
                                width={null}
                            />
                        </div>
                        <div class="flex justify-center flex-col">
                            <div class="text-gray-800 text-l sm:text-2xl font-black">
                                <span>{testimonial.author}</span>
                            </div>
                            <div class="text-gray-600 text-normal sm:text-xl font-medium">
                                <span>{testimonial.authorRole}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</Section>