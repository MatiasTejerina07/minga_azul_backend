import Author from "../models/Author.js";
import createHttpError from "http-errors";

let find_id = async(req,res,next)=>{
    console.log(req.user.id)
    let author = await Author.findOne({
        user_id: req.user.id
    })
    if (author){
        return res.status(400).json({
            success: false,
            messages: "You are already an author!!"
        })
    }
    return next()
}
export default find_id