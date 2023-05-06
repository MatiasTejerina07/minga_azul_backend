import {Router} from "express";
import read from "../controllers/companies/read.js";
import create from "../controllers/companies/create.js";
import validator2 from "../middlewares/validator2.js";
import { companiesCreate } from '../schemas/companies.js';
import companiesExists from '../middlewares/companyExists.js'
import passport from "../middlewares/passport.js";


let router = Router()

router.get('/', read)
router.post('/',validator2(companiesCreate), passport.authenticate('jwt', {session: false}) ,companiesExists, create)

export default router