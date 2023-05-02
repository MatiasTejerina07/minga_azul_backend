import Company from "../models/Company.js";

async function  companiesExistsSingUp(req,res,next){
    
    const companies = await Company.findOne({
        name : req.body.name})
    if (companies){
        return res.status(400).json({
            succes: false,
            message:" The company already exists!"
        })
    }
    return next()
}
export default companiesExistsSingUp