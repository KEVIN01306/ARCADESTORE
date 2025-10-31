import z from "zod";


export const userSchema = z.object({
    _id: z
        .string()
        .optional(),
    name: z
        .string().min(1).max(30),
    type: z
        .string(),
    price: z
        .number().min(0),
    background: z
        .string(),
    context: z
        .string().min(10).max(255),
    active: z
        .boolean()
})