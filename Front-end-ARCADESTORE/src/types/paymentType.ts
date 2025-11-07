import { paymentSchema } from '../zod/payment.schema';
import { z } from 'zod'



export type PaymentFormInputs = z.infer<typeof paymentSchema>;


export const PaymentInitialState = {
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvc: "",
    saveCard: false,
}