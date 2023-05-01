const validator = (schema) => [
    (req, res, next) => {
        const validation = schema.validate(req.body, {abortEarly: false})
        if(validation.error){
            console.log(validation.error.details[0].path)
            return res.status(400).json({
                success: false,
                message: validation.error.details.map(err => {return {path: err.path, message: err.message}})
            })
        }
        return next();
    }
]

export default validator;