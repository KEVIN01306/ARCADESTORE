
import Joi from "joi"

export const schemaGame = Joi.object({
    _id: Joi.string().optional(),
    name: Joi.string().min(1).max(30).required(),
    type: Joi.string().required(),
    price: Joi.number().min(0).required(),
    background: Joi.string().required(),
    context: Joi.string().min(10).max(255).required(),
})