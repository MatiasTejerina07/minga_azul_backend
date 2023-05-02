import {Router} from "express";
import read from "../controllers/authors/read.js"
import create from "../controllers/authors/create.js";

import validator from "../middlewares/validator.js";
import { authorCreateSingnIn } from "../schemas/authors.js"
import authorExistsSingUp from "../middlewares/accountSingUp.js";


let router = Router()

router.get('/', read)
router.post('/signup', validator(authorCreateSingnIn), authorExistsSingUp, create)
export default router
