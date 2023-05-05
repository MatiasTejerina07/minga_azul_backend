import {Router} from 'express';

import read from '../controllers/chapters/read.js';
import create from '../controllers/chapters/create.js';
import validator2 from '../middlewares/validator2.js';
import passport from '../middlewares/passport.js';
import chapterExistsSingUp from "../middlewares/chapterSingUp.js";
import existOrder from '../middlewares/existsorder.js';
import { createChapterSchema } from '../schemas/chapters.js';

let router = Router();

router.get("/", read),
router.post('/create', validator2(createChapterSchema),passport.authenticate("jwt", {session: false}), chapterExistsSingUp ,existOrder,  create)

export default router