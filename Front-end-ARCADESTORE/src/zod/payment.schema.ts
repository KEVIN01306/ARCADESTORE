import {z} from 'zod'

export const paymentSchema = z.object({
    cardNumber: z
        .string()
        .regex(/^[0-9]{13,16}$/, 'Enter a valid card number')
        .min(13, 'The card number is required'),
    cardName: z.string().min(1, 'The name on the card is required').regex(/^[A-Za-z]+$/, 'NOT NUMBERS'),
    expiryDate: z.string().min(1, 'Select the expiration date'),
    cvc: z.string().regex(/^[0-9]{3,4}$/, 'CVC inválido'),
    saveCard: z.boolean().optional(),
});
