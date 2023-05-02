import Company from '../../models/Company.js' 
import { createCompanySchema } from '../../schemas/companies.js';

//ruta para crear un capítulo
let create = async(req,res,next) => {
try {
    const { value, error } = createCompanySchema.validate(req.body);
        if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    const company = new Company(value);
    await company.save();
    res.status(201).json(company);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
        next(err);
    }
};

export default create