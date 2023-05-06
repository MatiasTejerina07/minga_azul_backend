import {Router} from "express";
import read from "../controllers/authors/read.js"
import create from "../controllers/authors/create.js";
import passport from "../middlewares/passport.js";
import validator2 from "../middlewares/validator2.js";
import authorExist from "../middlewares/authorExists.js";
import authorNameExist from "../middlewares/authorNameExists.js";
import { authorCreate } from "../schemas/authors.js"



let router = Router()

router.get('/', read)
router.post('/', validator2(authorCreate),passport.authenticate("jwt", {session: false}),authorExist,authorNameExist, create)
export default router
