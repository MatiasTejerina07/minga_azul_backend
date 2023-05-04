import {Router} from "express";
import read from "../controllers/companies/read.js";
import create from "../controllers/companies/create.js";
import validator2 from "../middlewares/validator2.js";
import { companiesCreate } from '../schemas/companies.js';
import companiesExistsSingUp from '../middlewares/companySingUp.js'
let router = Router()

router.get('/', read)
router.post('/cia-form',validator2(companiesCreate), companiesExistsSingUp, create)

export default router