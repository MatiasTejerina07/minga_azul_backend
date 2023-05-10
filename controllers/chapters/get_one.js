import Chapter from '../../models/Chapter.js'

let get_one = async (req,res,next) => {
    try {
        let { id } = req.params
        let get_one = await Chapter.findOne({ _id:id }, 'pages title order -_id')
        return res.status(200).json({
            success: 'ok',
            response: get_one
        })
        } catch (error){
        next(error)
        }
}

export default get_one