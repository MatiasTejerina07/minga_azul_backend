import Manga from '../../models/Manga.js'

let read = async(req,res,next)=>{
    let queries = {}
    let sort = {}
    let pagination = {
        limit: 6,
        page:1
    }
    if( req.query.title){
        queries.title = new RegExp(req.query.title.trim(), 'i')
        pagination={
            limit:10,
            page:1
        }

    }
    if( req.query.category_id ){
        queries.category_id =  req.query.category_id.trim()
        pagination={
            limit:10,
            page:1
        }
    }
    if ( req.query.order ){
        sort.title = req.query.order
    }
    if (req.query.page){
        pagination.page = req.query.page
    }
    if (req.query.limit){
        pagination.limit = req.query.limit
    }
    console.log(queries)


    try {
        let all = await Manga
        .find(queries)
        .select("name title cover_photo description category_id")
        .sort(sort)
        .skip( pagination.page > 0 ? (pagination.page-1)*pagination.limit: 0)
        .limit( pagination.limit > 0 ? pagination.limit: 0)
        .populate('category_id')
        res.status(200).json({
            succes: true,
            response: all
        })
        
    } catch (error) {
        next(error)
    }
}
export default read