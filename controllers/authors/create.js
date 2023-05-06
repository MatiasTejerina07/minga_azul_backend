import createHttpError from "http-errors";
import Author from  '../../models/Author.js'
import User from "../../models/User.js";

let create = async(req, resp, next)=>{
    try {
        let authorData = req.body;
        authorData.active = true;
        authorData.user_id = req.user.id;
        
        console.log(authorData.id)
        
        
        let one = await Author(req.body)
        await one.save()
        await User.findOneAndUpdate({
            _id: req.user.id
        },{
            role: 1,
        })
        return resp.status(201).json({
            author: one,
            succes: true,
            timestamps: one.createAt
        })
        
        
    } catch (error) {
        console.log(error)
        next(error)
    }
}
export default create