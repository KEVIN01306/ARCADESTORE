import Joi from "joi";


export const schemaUser = Joi.object({
    _id: Joi.string().optional(),
    firstName: Joi.string().min(2).max(20).required(),
    secondName: Joi.string().min(2).max(20).optional(),
    firstLastName: Joi.string().min(2).max(20).required(),
    secondLastName: Joi.string().min(2).max(20).optional(),
    email: Joi.string().email().pattern(/@(gmail\.com|umes\.org)$/).required(),
    password: Joi.string().min(8).required(),
    rol: Joi.string().required(),
    games: Joi.array().items(Joi.string()),
    dateBirthday: Joi.string().replace(/\s/g, ""),
    active: Joi.boolean().required()
})