import * as z from 'zod';
export const SigninSchema = z.object({
    username: z.string(),
    password: z.string(),
    code: z.optional(z.string().length(8))
});
export const SignupSchema = z.object({
    username: z.string(),
    password: z.string(),
    email: z.string().email()
});