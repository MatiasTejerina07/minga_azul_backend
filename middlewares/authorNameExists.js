import Author from "../models/Author.js";

async function authorNameExist(req,res,next){
    let author = await Author.findOne({
        name: req.body.name
    })
    if(author){
        return res.status(400).json({
            success: false,
            messagges: "No podes tener el mismo nombre chanta"
        })
    }
    return next()
}
export default authorNameExist