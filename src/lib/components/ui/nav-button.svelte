<script>
	import { A, Img } from "flowbite-svelte";
</script>

<A {...$$props} class="bg-white text-black pl-5 pr-3 py-3 overflow-hidden rounded-lg justify-between flex w-37 h-fit hover:no-underline hover:bg-blue-400">
    <div class="text-sm font-medium uppercase">
        <slot />
    </div>
    <div class="flex justify-end align-middle w-6">
        <Img 
            src="/arrow-right-black.png"
            alt="arrow to discover more"
            class="w-6 h-6 text-black"
        />
    </div>
</A>