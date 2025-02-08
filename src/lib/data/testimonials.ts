

export type Testimonial = {
    svg: string;
    quote: string;
    author: string;
    authorRole: string;
}

export const Testimonials: Testimonial[] = [
    {
        svg: 'lovegunn',
        quote: 'Mike was a pleasure to work with throughout our project, his detailed insight and the experience he brought to the project was hugely helpful. I would definitely recommend Mike and look forward to working with him again.',
        author: 'Adam Glaiser-Creed',
        authorRole: 'Account Director at LoveGunn',
    }, {
        svg: 'apopo',
        quote: 'Mike is a highly creative and adaptable professional who quickly embraced change. He developed an excellent field data collection application for our organization and it was a pleasure to work with him - always ready to tackle challenges.',
        author: 'Walter Magesa',
        authorRole: 'Assistant Research Fellow at APOPO',
    }, {
        svg: 'jjsmith',
        quote: 'Always provides the desired solution in good time and provides a great service when we need it.',
        author: 'Dave Moore',
        authorRole: 'Operations Manager at JJ Smith',
    },
]
