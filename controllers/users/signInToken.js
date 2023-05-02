import User from '../../models/User.js'
const signintoken =  async (req, res, next) => {
    const {email} = req.user
    try{
        let user = await User.findOneAndUpdate(
            {email},
            {is_online: true},
            {new: true}
        )
        user = {email: req.user.email, photo: req.user.photo, role: req.user.role};
        return res.status(200).json({
            success: true,
            user
        })
    }catch(error){
        next(error);
    }
}

export default signintoken;