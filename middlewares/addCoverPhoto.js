async function addCoverPhoto(req, res, next){
    if(req.body.pages.length > 0){
        req.body.cover_photo = req.body.pages[0]
        return next()
    }
    return res.status(400).json({
        succes: false,
        messages: "cualquier cosa"
    })
}
export default addCoverPhoto