import {Router} from "express";
import read from "../controllers/authors/read.js"
import create from "../controllers/authors/create.js";
import passport from "../middlewares/passport.js";
import validator from "../middlewares/validator.js";
import authorExist from "../middlewares/authorExists.js";
import authorNameExist from "../middlewares/authorNameExists.js";
import { authorCreate } from "../schemas/authors.js"



let router = Router()

router.get('/', read)
router.post('/', validator(authorCreate),passport.authenticate("jwt", {session: false}),authorExist,authorNameExist, create)
export default router
