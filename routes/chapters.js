import {Router} from 'express';

import read from '../controllers/chapters/read.js';
import create from '../controllers/chapters/create.js';
import validator from '../middlewares/validator.js';
import passport from '../middlewares/passport.js';
import chapterExists from "../middlewares/chapterExists.js";
import existOrder from '../middlewares/existsorder.js';
import isPropertyOf from '../middlewares/isPropertyOf.js';
import nextOrder from '../middlewares/nextOrder.js';
import mangaExists from '../middlewares/mangaExists.js';
import find_id from '../middlewares/findsId.js';
import isactive from '../middlewares/isactive.js';
import addCoverPhoto from '../middlewares/addCoverPhoto.js';
import get_one from '../controllers/chapters/get_one.js';
import get_me from '../controllers/chapters/get_me.js';
import { createChapterSchema, updateChapterSchema } from '../schemas/chapters.js';
import getChapters from '../controllers/chapters/get_chapters.js';
import getPages from '../controllers/chapters/get_pages.js';
import destroy from '../controllers/chapters/destroy.js';
import update from '../controllers/chapters/update.js';

let router = Router();

router.get('/', getChapters);
router.get('/:id',get_one)
router.get('/pages/:id', getPages)
router.post('/', validator(createChapterSchema),passport.authenticate("jwt", {session: false}),mangaExists, find_id ,isPropertyOf, chapterExists,addCoverPhoto ,nextOrder ,existOrder,  create)
router.get('/me/:manga_id',passport.authenticate("jwt", {session: false}), find_id, get_me)
router.put('/:id',validator(updateChapterSchema),passport.authenticate('jwt',{session:false}),/* find_id, isactive, isPropertyOf, */ update)
router.delete('/:id',passport.authenticate('jwt',{session:false}), /* find_id, isactive, isPropertyOf , */ destroy)

export default router