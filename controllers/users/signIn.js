import User from '../../models/User.js';
import  jwt  from 'jsonwebtoken';

let signin = async(req, res, next) =>{
    try{
        await User.findOneAndUpdate(
            {email: req.body.email},
            {is_online: true}
        )
        const token = jwt.sign(
            {id: req.user.id},
            process.env.SECRET,
            {expiresIn: 60*60*24*10}
        )
        const user = {email: req.user.email, photo: req.user.photo, role: req.user.role};
        return res.status(200).json({
            success: true,
            token,
            user
        });
        //to do cambiar con el grupo forma de respuestas.
    }catch(error){
        next(error);
    }
}

export default signin;