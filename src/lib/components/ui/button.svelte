<script lang="ts">
    import { Button } from "flowbite-svelte";

    export let variant = 'outline';
    export let chevron = false;

    const outlineClass = "";
    const blueClass = "bg-blue-400 ";
    const whiteClass = "bg-white text-black font-normal text-base border-0";

    function getBtnClass(variant: string) {
      switch (variant) {
        case 'blue': {
          return blueClass;
        }

        case 'white':
          return whiteClass;

        case 'outline':
        default:
          return outlineClass;
      }
    }


    const btnClass = getBtnClass(variant);
  </script>
  
  <Button {...$$props} class={`border-blue-400 border-2 ${btnClass} flex flex-row justify-center align-middle`} {...$$props}>
    
    <span>
      <slot />
    </span>
    {#if chevron}
    <img src="/chevron-right.svg" alt="right-chevron" class="w-4 h-4 ml-3 text-gray-900 align-middle " />
    {/if}
  </Button>
  