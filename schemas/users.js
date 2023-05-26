import joi from "joi"

export const userSignUp = joi.object({
    name: joi.string().required().max(30),
    last_name: joi.string().required(),
    email: joi.string().email({minDomainSegments: 2}).required(),
    password: joi.string().min(8).max(25).required(),
    photo: joi.string().uri(),
})

export const userSignIn = joi.object({
    email: joi.string().email({minDomainSegments: 2}).required(),
    password: joi.string().min(8).max(25).required()
})