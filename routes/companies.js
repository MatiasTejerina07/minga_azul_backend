import {Router} from "express";

import read from "../controllers/companies/read.js";
import create from '../controllers/companies/create.js';
import validator from '../middlewares/validator.js';
import { createCompanySchema } from '../schemas/companies.js';

let router = Router()

router.get('/', read)
router.post('/', validator(createCompanySchema) , create)

export default router