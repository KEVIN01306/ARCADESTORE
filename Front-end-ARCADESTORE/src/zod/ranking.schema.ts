import z from "zod";


export const rankingSchema = () => z.object({
    _id: z.string().optional(),
    userId: z.string(),
    userName: z.string(),
    score: z.number().optional(),
    movements: z.number().optional(),
    time: z.string().optional()
})