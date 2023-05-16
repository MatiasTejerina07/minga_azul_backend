import Author from "../../models/Author.js";

const update = async (req, res, next) => {
    try {
        let upd = await Author.findByIdAndUpdate(
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
                        path: "AuthorUpdate",
                        message: "Author update!"
                    }]
                })
        }
    } catch (error) {
        next(error)
    }
}
export default update