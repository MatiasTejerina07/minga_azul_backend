import Joi from 'joi';

//objeto de esquema Joi que define la forma de los datos de entrada que se espera para la creación de una compañia:
export const createCompanySchema = Joi.object({
    name: Joi.string().required(),
    logo: Joi.string().uri().required(),
    website: Joi.string().uri().required(),
    description: Joi.string().required(),
    active: Joi.boolean().required(),
    user_id: Joi.string().required(),
});