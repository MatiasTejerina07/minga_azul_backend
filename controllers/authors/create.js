import createHttpError from "http-errors";
import Author from  '../../models/Author.js'

let create = async(req, resp, next)=>{
    try {
        let authorData = req.body;
        authorData.active = true;
        console.log(authorData.id)
        authorData.user_id = '6442f71ea4ac022e334b18b1';
        
        
        let one = await Author(req.body)
        await one.save()
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