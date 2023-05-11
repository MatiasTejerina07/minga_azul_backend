import Chapter from '../../models/Chapter.js'

async function getPages(req, res, next) {
    let limit = 4
    if (req.query.limit) {
        limit = req.query.limit
    }
    try {
        let count = await Chapter.countDocuments({manga_id: req.params.id}) / limit
        count = Math.ceil(count)
        return res.status(201).json({
            success: true,
            pages: count
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: [{
                path: "serverError",
                message: "Internal server error, please try again later."
            }]
        })
    }

}

export default getPages