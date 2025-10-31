import Joi from "joi";


export const schemaUser = Joi.object({
    _id: Joi.optional().string(),
    firsNAme: Joi.string().min(2).max(20).required(),
    secondName: Joi.string().min(2).max(20).optional(),
    fistLastName: Joi.string().min(2).max(20).required(),
    secondLastName: Joi.string().min(2).max(20).optional(),
    email: Joi.string().email({ tlds: { allow: ['gmail', 'umes']} }).required(),
    password: Joi.string().min(8).required(),
    games: Joi.array().items(Joi.string()),
    dateBirthday: Joi.string().replace()
})