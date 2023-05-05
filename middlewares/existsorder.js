import Chapter from "../models/Chapter.js";


async function existOrder (req,res,next){
    const chapters = await Chapter.findOne({
        manga_id: req.body.manga_id,
        order: req.body.order,

    })
    console.log(chapters)
    if (chapters){
        return res.status(400).json({
            success: false,
            messages: "The order already exists"
        })
    }
    return next()

}
export default existOrder