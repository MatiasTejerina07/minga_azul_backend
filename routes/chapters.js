import {Router} from 'express';

import read from '../controllers/chapters/read.js';
import create from '../controllers/chapters/create.js';
import validator from '../middlewares/validator.js';
import chapterExistsSingUp from "../middlewares/chapterSingUp.js"
import { createChapterSchema } from '../schemas/chapters.js';

let router = Router();

router.get("/", read),
router.post('/create', validator(createChapterSchema), chapterExistsSingUp , create)

export default router