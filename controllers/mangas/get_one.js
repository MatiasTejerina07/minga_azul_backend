import Manga from "../../models/Manga.js";

async function getOne(req, res, next){
    console.log(req.params.id);
    try {
        let manga = await Manga.findById(req.params.id).select('-_id  -__v').populate("company_id", "name -_id").populate("category_id", "color hover name -_id").populate("author_id", "name -_id")
        if(manga){
           return res.status("201").json(manga);
        }
        return res.status(404).json({
            success: false,
            message: [{
                path: "exists",
                message: "The manga doesn't exists"
            }]
        })
        
    } catch (error) {
        console.log(error);
    }
}

export default getOne