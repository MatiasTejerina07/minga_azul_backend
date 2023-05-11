import {Router} from "express";
import get_mangas from "../controllers/mangas/get_mangas.js";
import passport from "../middlewares/passport.js";
import validator from "../middlewares/validator.js";
import create from '../controllers/mangas/create.js'
import {mangasCreate} from '../schemas/mangas.js';
import exists_title from "../middlewares/existsTitle.js";
import find_id from '../middlewares/findsId.js';
import get_one from '../controllers/mangas/get_one.js';

let router = Router()

router.get('/', get_mangas)
router.get('/:id', get_one)
router.post('/',validator(mangasCreate),  passport.authenticate('jwt', {session: false}),exists_title,find_id ,create )

export default router