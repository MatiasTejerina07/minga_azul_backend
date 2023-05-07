import Manga from "../models/Manga.js";

async function isPropertyOf(req,res,next){
    let manga= await Manga.findOne({
        _id: req.body.manga_id,
        author_id: req.body.author_id,
    })
    if(manga){
        return next()
    }
    return res.status(400).json({
        success: false,
        message: [{
            path: "authorship",
            message: "The manga is not of your authorship"
        }]
    })
}
export default isPropertyOf