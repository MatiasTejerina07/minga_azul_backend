import Author from "../models/Author.js"

async function isActive(req,res,next){
    let author = await Author.findOne({
        user_id: req.user.id,
    })
    if (!author.active){
        return next()
    }
}
export default isActive