import Companies from '../../models/Company.js'

let create = async(req,res,next)=>{
    try {
        let object = req.body;
        object.active = true;
        object.user_id = '6442f6edff4aba8835dad8a5';
        

        let one = await Companies(req.body)
        await one.save()
        return res.status(201).json({
            companies: one,
            succes: true,
            timestamps: one.createAt
        })
    } catch (error) {
        console.log(error)
        next(error)
        
    }
}

export default create