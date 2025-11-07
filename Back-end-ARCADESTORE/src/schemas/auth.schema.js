import Joi from "joi";

export const schemaAuth = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(1).max(100)
})