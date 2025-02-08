<script>
    import LogoApopo from './apopo.svg?component';
    import LogoJJSmith from './jjsmith.svg?component';
    import LogoLoveGunn from './lovegunn.svg?component';

    let props = $props();
</script>


    {#if props.brand === "apopo"}
    <div class="text-black flex justify-center items-center w-full h-20 sm:h-auto">
        <LogoApopo preserveAspectRatio="xMidYMid meet" />
    </div>
    {:else if props.brand === "jjsmith"}
    <div class="text-black flex justify-center items-center w-full h-20 sm:h-auto">
        <LogoJJSmith preserveAspectRatio="xMidYMid meet" />
    </div>
    {:else if props.brand === "lovegunn"}
    <div class="text-black aspect-[300/70]">
        <LogoLoveGunn class=""  />
    </div>
    {:else} 
    {null}
    {/if} 
