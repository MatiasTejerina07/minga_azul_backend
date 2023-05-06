import Joi from 'joi';
import objectId from 'joi-objectid';
Joi.objectId = objectId(Joi);
//objeto de esquema Joi que define la forma de los datos de entrada que se espera para la creación de un capítulo:
export const createChapterSchema = Joi.object({
    manga_id: Joi.objectId().required(),
    title: Joi.string().required(),
    pages: Joi.array().items(Joi.string().uri()).required(),
    order: Joi.number(),
});