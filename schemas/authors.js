import joi from "joi";


export const authorCreateSingnIn = joi.object({
    name: joi.string().required()
    .min(4)
    .max(10)
    .messages({
        'any.required':'Is name required',
        'string.empty':'Is name required',
        'string.min':'The name is too short',
        'string.max':'The name can only contain 10 letters'
    }),
    lastname: joi.string()
      .min(4)
      .max(10)
      .optional()
      .messages({
         'string.min': 'The lastname is too short',
         'string.max': 'The lastname can only contain 10 letters'
      }),

   date: joi.date()
      .optional()
      .messages({
         'date.base': 'Invalid date format',
      }),

    city: joi.string().required(),

    country: joi.string().required(),

    photo: joi.string().required()
    .uri()
    .messages({
        'any.required': 'The url does not exist or is invalid',
        'string.empty': 'The url does not exist or is invalid',
        'string.uri': '¡INVALID URL!',
    }),
})
