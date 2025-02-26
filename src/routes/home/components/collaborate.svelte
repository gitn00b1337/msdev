<script lang="ts">

	import Section from "$lib/components/layout/section.svelte";
	import Button from "$lib/components/ui/button.svelte";
	import { Input, Label, Textarea } from "flowbite-svelte";
    import { z } from "zod";
	import { Turnstile } from 'svelte-turnstile';
    
    let name = "";
    let email = "";
    let message = "";
    let validationErrors: z.ZodFormattedError<{
        name: string;
        email: string;
        message: string;
    }, string> | null = null;
    let responseMessage = '';
    let submitted = false

    // Define Zod schema on frontend as well
    const contactSchema = z.object({
        name: z.string().min(2, "Name must be at least 2 characters long"),
        email: z.string().email("Invalid email address"),
        message: z.string().min(5, "Message must be at least 5 characters long"),
    });

    async function handleSubmit(event: any) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const token = formData.get("cf-turnstile-response");
        console.log(`CF token: ${token}`)

        responseMessage = '';

        // Validate form input on the client-side before sending
        const parsedData = contactSchema.safeParse({ name, email, message });
        if (!parsedData.success) {
            validationErrors = parsedData.error.format()
            return;
        } else if (!token) {
            responseMessage = 'No captcha found. Try reloading the page if the captcha box has not appeared.'
            return;
        }

        validationErrors = null;

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, message, token }),
            });

            const data = await res.json();
            if (res.ok) {
                responseMessage = 'Your message has been received! I will be in touch shortly.'
                submitted = true
            } else {
                responseMessage = data.error || "Ooops! Something went wrong."
                console.error("Error:", data);
            }
        } catch (err) {
            responseMessage = "Network error. Please try again.";
        }
    }
</script>

<Section id="contact-section">
    <div class="flex flex-col w-full p-6 sm:p-20">
        <!-- heading -->
        <div class="flex flex-row justify-center">
            <div class="flex py-10 flex-col gap-3 mb-12 sm:mb-24">
                <div class="flex flex-row justify-center">
                    <h3 class="text-lg font-normal text-white text-center align-middle">Contact Me Today</h3>
                </div>
                <div class="flex flex-row justify-center">
                    <h2 class="text-4xl sm:text-5xl font-extrabold text-center align-middle text-white uppercase">Let's Collaborate</h2>
                </div>
            </div>
        </div>

        <!-- contact container -->
         <div class="">
            <div class="border border-gray-50 flex flex-col md:flex-row">
                <!-- left panel -->
                <div class="border-b md:border-b-0 md:border-r border-r-gray-50 p-14 pt-24 flex flex-col gap-9 w-full md:w-[40%]">
                    <div class="rounded-full overflow-hidden bg-white w-36 h-36">
                    </div>
                    <div>
                        <h3 class="text text-white text-3xl sm:text-4xl font-bold mb-1">
                            30 min 1:1 Meeting
                        </h3>
                    </div>
                    <div class="">
                        <div class="flex flex-row justify-start align-middle mb-3">
                            <img
                                class="w-6 h-6 text-gray-100" 
                                src="/chevron-right2.svg"
                                alt="right chevron"
                            />
                            <span class="text-l sm:text-xl font-medium text-gray-100">
                                Schedule a discovery call
                            </span>
                        </div>
                        <p class="text-gray-100 text-x sm:text-xl font-normal">
                            Have a new project in mind? Schedule a 30 minute discovery call to get free advice and find out how I can help.
                        </p>
                    </div>

                </div>
    
                <!-- form container -->
                 <div class="flex-1 py-14 px-16">
                    <h2 class="text-white text-4xl sm:text-5xl font-extrabold mb-10 sm:mb-20">Schedule a discovery call</h2>

                    <!-- form -->
                    <div>
                        <form class="space-y-8" on:submit={handleSubmit}>
                            <div class="flex flex-col md:flex-row justify-between gap-3 sm:gap-6">
                                <div class="flex-1 flex flex-col">
                                    <Input 
                                        id="name" 
                                        name="name" 
                                        placeholder="Full Name" 
                                        required 
                                        bind:value={name} 
                                        class="border-gray-300 h-14" 
                                        disabled={submitted}
                                    />
                                    {#if validationErrors?.name}
                                        <p class="text-red-500">{validationErrors.name._errors[0]}</p>
                                    {/if}                            
                                </div>
                                <div class="flex-1 flex flex-col">
                                    <Input 
                                        id="email" 
                                        name="email" 
                                        bind:value={email} 
                                        placeholder="Email" 
                                        required 
                                        class="border-gray-300 h-14" 
                                        disabled={submitted}
                                    />
                                    {#if validationErrors?.email}
                                        <p class="text-red-500">{validationErrors.email._errors[0]}</p>
                                    {/if} 
                                </div>
                            </div>
                            <div class="!mt-3 sm:!mt-6 flex flex-col">
                              <Textarea 
                                id="message" 
                                name="message" 
                                bind:value={message} 
                                placeholder="Message" 
                                class="border-gray-300 mh-20" 
                                rows={6} 
                                disabled={submitted}
                              />
                              {#if validationErrors?.message}
                                <p class="text-red-400">{validationErrors.message._errors[0]}</p>
                                {/if}
                            </div>
                            <div class="flex flex-col md:flex-row justify-between gap-1">
                                <div id="cf-turnstile-container" class="flex overflow-hidden">
                                    <Turnstile 
                                        size='flexible' 
                                        siteKey="0x4AAAAAAA8A8hpuiIBTHp_h" 
                                        theme='dark' 
                                    />
                                </div>
                                <div>
                                    <Button variant="white" chevron type="submit" disabled={submitted}>
                                        <span class="text-[18px]">
                                            Submit
                                        </span>
                                    </Button>
                                </div>
                            </div>
                            <!-- cloudflare recaptcha-->
                            {#if responseMessage}
                            <div class="flex justify-end">
                                {#if submitted}
                                <p class="text-white text-xl">{responseMessage}</p>
                                {:else}
                                <p class="text-red-500">{responseMessage}</p>
                                {/if}
                            </div>
                            {/if}
                          </form>
                    </div>
                </div>
            </div>
         </div>
    </div>
</Section>

