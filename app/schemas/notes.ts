import * as z from 'zod';
export const NoteInitSchema = z.object({
    title: z.string(),
    slug: z.string().optional(),
    description: z.string().min(5, {message: "min 5 words."}),
    imageLink: z.string().url()
}).transform((data)=>{
    return {
        ...data,
        slug: data.slug || data.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '')
    }
})