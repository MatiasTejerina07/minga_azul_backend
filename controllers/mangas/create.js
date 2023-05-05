import Manga from '../../models/Manga.js'

let create = async(req,res,next)=>{
    try {
        if(!req.body.company_id){
            req.body.company_id = null
        }
        let manga = await Manga.create(req.body);
        return res.status(201).json({
            succes: true,
            manga: manga
        })
    } catch (error) {
        next(error)
    }
}

export default create