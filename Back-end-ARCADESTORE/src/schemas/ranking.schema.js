import Joi from "joi";

export const schemaRanking = Joi.object({
    _id: Joi.string().optional(),
    userId: Joi.string(),
    userName: Joi.string(),
    score: Joi.number().optional(),
    movements: Joi.number().optional(),
    time: Joi.string().optional()
})