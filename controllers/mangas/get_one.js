import Manga from "../../models/Manga.js";

async function getOne(req, res, next){
    console.log(req.params.id);
    try {
        let manga = await Manga.findById(req.params.id).select('-_id -author_id -__v')
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