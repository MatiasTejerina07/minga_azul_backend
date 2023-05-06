import Manga from "../models/Manga.js";

async function mangaExists(req, res, next) {
    const manga = await Manga.findById(req.body.manga_id)
    if (!manga) {
        return res.status(400).json({
            succes: false,
            message: [{
                path: "mangaNoExist",
                message: "El manga no existe!"
            }]
        })
    }
    return next()
}
export default mangaExists;