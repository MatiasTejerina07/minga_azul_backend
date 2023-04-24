let read = (req,res,next)=>res.status(200).render('index',{
    title: '/CHAPTERS',
    subtitle: 'endpoints of chapters'
})


export default read