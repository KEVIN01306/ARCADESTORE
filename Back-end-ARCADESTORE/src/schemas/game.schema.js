
import joi from "joi";

export const schemaGame = joi.object({
    name: joi.string().min(1).max(20).required(),
    type: joi.string().required(),
    price: joi.number().min(0).required(),
    background: joi.string().required()
})
