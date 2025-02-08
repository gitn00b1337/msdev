<script>
	import Section from "$lib/components/layout/section.svelte";

</script>


<Section>
    <div class=" p-20 bg-white">
        <div class="text-center">
            <h2 class="text-white text-5xl font-regular mb-20">My Work</h2>
        </div>
        <div class="flex flex-row gap-20">
            <!-- img -->
            <div class="flex-1">
                <div class="rel w-full aspect-square">
                    <img
                        class="object-cover w-full h-full bg-cover"
                        src="/work/woodworking.png"
                        alt="Woodworking Machinery"
                    />
                </div>
            </div>
            <!-- text -->
            <div class="flex-1 ">
                <h3 class="font-extrabold text-xl">Machinery Desktop App</h3>
                <p>
                    JJ Smith is one of my long-term clients who I have worked with since 2023. Working on a desktop application, I provide
                    development services to add functionality for new machinery, any customer requirements, and general consultation. 
                </p>
            </div>
        </div>
    </div>
</Section>