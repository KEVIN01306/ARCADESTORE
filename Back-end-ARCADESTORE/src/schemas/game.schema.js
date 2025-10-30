
import joi from "joi";

export const schemaGame = joi.object({
    _id: joi.string().optional(),
    name: joi.string().min(1).max(30).required(),
    type: joi.string().required(),
    price: joi.number().min(0).required(),
    background: joi.string().required(),
    context: joi.string().min(10).max(255).required(),
})
