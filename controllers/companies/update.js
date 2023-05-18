import Company from "../../models/Company.js";


const update = async (req, res, next) => {
    try {
        let upd = await Company.findByIdAndUpdate(
            req.params.id
            ,
            { active: req.body.active },
        )
        if (upd) {
            return res
                .status(200)
                .json({
                    success: true,
                    message: [{
                        path: "CompanyUpdate",
                        message: "Company update!"
                    }]
                })
        }
    } catch (error) {
        next(error)
    }
}
export default update