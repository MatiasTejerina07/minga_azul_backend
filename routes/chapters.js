import {Router} from 'express';

import read from '../controllers/chapters/read.js';
import create from '../controllers/chapters/create.js';
import validator2 from '../middlewares/validator2.js';
import passport from '../middlewares/passport.js';
import chapterExists from "../middlewares/chapterExists.js";
import existOrder from '../middlewares/existsorder.js';
import isPropertyOf from '../middlewares/isPropertyOf.js';
import nextOrder from '../middlewares/nextOrder.js';
import mangaExists from '../middlewares/mangaExists.js';
import { createChapterSchema } from '../schemas/chapters.js';

let router = Router();

router.get("/", read),
router.post('/', validator2(createChapterSchema),passport.authenticate("jwt", {session: false}),mangaExists,isPropertyOf, chapterExists ,nextOrder ,existOrder,  create)

export default router