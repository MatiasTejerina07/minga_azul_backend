import express from 'express';
import userRouter from './users.js'
import authorRouter from './authors.js'
import chaptersRouter from './chapters.js'
import mangasRouter from './mangas.js'
import categoriesRouter from './categories.js'
import companiesRouter from './companies.js'
import paymentsRouter from './payments.js'
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express',
    subtitle: "endpoints of mingas"
  });
});

router.use('/auth', userRouter)
router.use('/authors', authorRouter)
router.use('/chapters', chaptersRouter)
router.use('/mangas', mangasRouter)
router.use('/categories', categoriesRouter)
router.use('/companies', companiesRouter)
router.use('/payments', paymentsRouter)

export default router;