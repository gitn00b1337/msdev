import { z } from "zod";
import { Resend } from "resend";

// Define Zod schema
const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters long"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(5, "Message must be at least 5 characters long"),
    token: z.string(),
});

export const POST = async (request: Request, response: Response) => {
    try {
        const body = await request.json();

        // Validate with Zod
        const parsedBody = contactSchema.safeParse(body);
        if (!parsedBody.success) {
            return new Response(JSON.stringify({ 
                error: "Validation error", 
                details: parsedBody.error.format() 
            }), { 
                status: 400, 
                headers: { "Content-Type": "application/json" } 
            });
        }

        const ip = request.headers.get("CF-Connecting-IP") || ''
        const from = process.env.FROM_EMAIL_ADDRESS;
        const to = process.env.MSDEV_EMAIL_ADDRESS;
        const captchaKey = process.env.CF_CAPTCHA_KEY;

        // not secret, just want them clear of source control
        console.log(`from: ${from} to: ${to}`)
        console.log(parsedBody)
        console.log(`ip: ${ip}`)

        if (!from) {
            return new Response(
                JSON.stringify({ error: 'An error occured [919], please contact manually.' }), 
                { status: 500, headers: { "Content-Type": "application/json" }  
            })
        } else if (!to) {
            return new Response(
                JSON.stringify({ error: 'An error occured [920], please contact manually.' }), 
                { status: 500, headers: { "Content-Type": "application/json" }  
            })
        } else if (!captchaKey) {
            console.error('Captcha key missing!')
            return new Response(
                JSON.stringify({ error: 'An error occured [922], please contact manually.' }), 
                { status: 500, headers: { "Content-Type": "application/json" }  
            })
        }

        let formData = new FormData();
        formData.append("secret", captchaKey);
        formData.append("response", parsedBody.data.token);
        formData.append("remoteip", ip);

        const resend = new Resend(process.env.RESEND_API_KEY);
        const url = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
        const captchaResult = await fetch(url, {
            body: formData,
            method: "POST",
        });
        const outcome = await captchaResult.json();

        if (!outcome.success) {
            console.error(outcome['error-codes'])
            return new Response(
                JSON.stringify({ error: 'Request failed captcha checks. Did you correctly fill out the captcha?' }), 
                { status: 500, headers: { "Content-Type": "application/json" }  
            });
        }

        const result = await resend.emails.send({
            from,
            to,
            subject: `${parsedBody.data.name} has sent you a message from msdev!`,
            html: `<p>${parsedBody.data.message}</p><p>${parsedBody.data.email}</p>`,
        });

        if (result.error) {
            console.error(result.error)
            return new Response(
                JSON.stringify({ error: 'An error occured [921], please contact manually.' }), 
                { status: 500, headers: {"Content-Type": "application/json"} }  
            );
        } else {
            console.log(result.data);
        }

        return new Response(JSON.stringify({ success: true, data: parsedBody.data }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error handling request:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
};
