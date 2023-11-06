import User from "../../Models/User.js"
import bcryptjs from "bcryptjs"

const loginUser = async(req, res) => {
    const {email, password} = req.body
    console.log("acabo de llegar");

    if(!email || !password) {
        return res.status(403).send({
            status:"Error",
            message: "Falta email o password."
        })

    }

    const findUser = await User.findOne({email: email})
    if(!findUser) {
        return res.status(403).send({
            status:"Error",
            message: "No existen usuarios registrados con ese email."
        })
        
        
    }
    let currentPassword =  findUser.password
    if(!bcryptjs.compareSync(password, currentPassword)) {
        return res.status(403).send({
            status:"Error",
            message: "La contraseña no es correcta."
        })
    }

    return res.status(201).send({
        status: "Success",
        message: "Logeado con exito."
    })

}

export default loginUser