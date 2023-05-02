import Chapter from "../models/Chapter.js";

async function  chapterExistsSingUp(req,res,next){

    const chapter = await Chapter.findOne({
        title : req.body.title})
    if (chapter){
        return res.status(400).json({
            succes: false,
            message:"There is already a chapter!"
        })
    }
    return next()
}
export default chapterExistsSingUp