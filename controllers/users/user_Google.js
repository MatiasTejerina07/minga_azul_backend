import jwt from "jsonwebtoken"
import User from "../../models/User.js"

let userGoogle = async (req, res, next) => {
    const token = req.body.credential
    const token2 = jwt.decode(token)
    const { email, email_verified, name, picture, given_name, jti } = token2
    let user = {
        name: name,
        last_name: given_name,
        email: email,
        photo: picture,
        is_verified: email_verified,
        password: jti,
        is_online: true,
        role: 0,
        verify_code: jti

    }
    try {
        await User.create(user)
        return res.status(201).json({
            success: true,
            message: "The user was created"
        })
    } catch (error) {
        next(error);
    }
}
export default userGoogle