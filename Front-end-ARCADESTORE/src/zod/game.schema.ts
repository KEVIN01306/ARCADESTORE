import { z } from 'zod'


export const gameSchema = z.object({
    _id: z
        .string()
        .optional(),

    name: z
        .string()
        .min(3, "El nombre debe tener almenos 3 caracteres")
        .max(30, "EL maximo de caracteres es de 50"),
    
    type: z.string(),

    price: z
        .number()
        .min(0, "El presio no puede ser negativo"),
    background: z
        .string(),
    context: z
        .string()
        .min(10, "El contexto debe tener almenos 10 caracteres")
        .max(255,"El Contexto no puede tener mas de 255 caracteres")
})
