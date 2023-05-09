import Chapter from '../../models/Chapter.js'

async function getChapters(req, res, next) {
    let skip = 0
    let limit = 4
    let order = 1
    if (req.query.limit) {
        limit = req.query.limit
    }
    if (req.query.page) {
        skip = (req.query.page - 1) * limit
        console.log(skip)
    }
    if (req.query.order) {
        order = req.query.order
    }
    console.log(req.query.manga_id)
    try {
        let count = await Chapter.countDocuments({manga_id: req.query.manga_id}) / limit
        count = Math.ceil(count)
        let chapters = await Chapter.find({ manga_id: req.query.manga_id }, 'title order cover_photo ', { skip: skip, limit: limit })?.sort({ order: order })
        return res.status(201).json({
            success: true,
            chapters,
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

export default getChapters