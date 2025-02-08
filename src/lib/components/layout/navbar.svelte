<script lang="ts">
    import { page } from '$app/state';
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
    import Button from '../ui/button.svelte';
    import { animateScroll } from 'svelte-scrollto-element';
    
    $: activeUrl = page.url.pathname;
    let activeClass = 'text-white bg-green-700 md:bg-transparent md:text-green-700 md:dark:text-white dark:bg-green-600 md:dark:bg-transparent no-underline hover:no-underline';
    let nonActiveClass = 'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent no-underline hover:no-underline';
  
    // TODO pages & remove this
    const handleScrollTo = (element: string, offset: number = 0) => {
          console.log('scrolling to..')
          animateScroll.scrollTo({ element, duration: 1000, offset})
      }

      const navLiClass = "text-text-light dark:text-text-dark lg:text-xl"

  </script>
  
  <Navbar class="bg-primary dark:bg-primary-dark text-text-light dark:text-text-dark z-20 top-0 fixed">
    <NavBrand href="/">
      <img src="/logo.png" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
    </NavBrand>
    <div class="flex md:order-2">
      <Button size="sm" onclick={() => handleScrollTo('#contact-section')}>
        <span class="text-xl">Contact</span>
      </Button>
      <NavHamburger />
    </div>
    <NavUl {activeUrl} {activeClass} {nonActiveClass} slideParams={{ delay: 0, duration: 250, }}>
      <NavLi class={navLiClass} href="#" onclick={() => handleScrollTo('#hero-section')}>Home</NavLi>
      <NavLi class={navLiClass} href="#" onclick={() => handleScrollTo('#approach-section', -100)}>About</NavLi>
      <NavLi class={navLiClass} href="#" onclick={() => handleScrollTo('#services-section')}>Services</NavLi>
      <NavLi class={navLiClass} href="#" onclick={() => handleScrollTo('#testimonials-section')}>Testimonials</NavLi>
    </NavUl>
  </Navbar>
  <div class="pt-[72px]"></div>