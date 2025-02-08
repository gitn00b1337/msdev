<script>
	import Section from "$lib/components/layout/section.svelte";

    let brands = [
        {
            src: '/logo-lovegunn.png',
            name: 'Love Gunn',
            alt: 'Love Gunn logo - a high profile design agency based in London',
        },
        {
            src: '/logo-apopo.png',
            name: 'APOPO',
            alt: 'APOPO logo - a global NGO focused on training rats to detect landmines, diseases, and other world problems'
        },
        {
            src: '/logo-jjsmith.png',
            name: 'JJ Smith',
            alt: 'JJ Smith - a global supplier of high quality woodworking machinery',
        },
    ];
</script>


<Section>
    <div class="px-15 sm:px-20 md:px-31 py-20 lg:mb-40 w-full ">
        <div class="w-full flex flex-col sm:flex-row sm:max-h-40 gap-20 sm:gap-8 md:gap-14 md:max-h-80 align-middle justify-center">
            {#each brands as brand}
                <img 
                    alt={`${brand.name} Logo`}
                    src={brand.src} 
                    class="h-full max-h-full w-auto"
                />
            {/each}
        </div>
    </div>
</Section>