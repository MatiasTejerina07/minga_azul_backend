import Manga from "../../models/Manga.js";
import Author from "../../models/Author.js"
async function getMe(req, res, next){
    try {
        let mangas = await Manga.find({author_id: req.body.author_id});
        if(mangas){
            return res.status(201).json({
                success: true,
                mangas
            })
        }else{
            return res.status(404).json({
                success: false,
                message: [{
                    path: "exists",
                    message: "There are no manga by this author"
                }]
            })
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message:[{
                path: "internalError",
                message: "Internal server error"
            }]
        })
    }
    
    
}

export default getMe;