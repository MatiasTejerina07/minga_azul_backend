let read = (req,res,next)=>res.status(200).render('index',{
    title: '/MANGAS',
    subtitle: 'endpoints of mangas'
})


export default read