import Author from "../../models/Author.js"



let read = async(req, res, next)=>{
    try{
        let all = await Author.find()
        return res.status(200).json({
            authors: all
        })
    }catch(error){
        return res.status(400).json({
            error: "error!"
        })
    }
  
 }

 export default read