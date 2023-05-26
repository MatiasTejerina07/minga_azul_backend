import { Router } from "express";
import reaction from "../controllers/reactions/updateReaction.js";
import passport from "../middlewares/passport.js";

let router = Router()

router.post('/',passport.authenticate('jwt', { session: false }), reaction)
router.get('/reactions'/* ruta para usar las queries */)
export default router