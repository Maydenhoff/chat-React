import User from "../../Models/User.js"
import bcryptjs from "bcryptjs"

const createUser = async(req, res) => {
    console.log("llegue aca user");
    console.log(req.body);
    const {name, lastName, userName, email, password} = req.body
    
    const userNameRepeated = await User.findOne({userName: userName})
    const emailRepeated = await User.findOne({email: email})
    if (emailRepeated) {
        return res.status(404).send({
            status:"error",
            message: "Ya existe un usuario registrado con ese email"
        })
    }
    if (userNameRepeated) {
        return res.status(404).send({
            status:"error",
            message: "Ya existe un usuario con ese userName"
        })
    }
    let passwordHash = await bcryptjs.hash(password, 8)
    const example = await User.create({name, lastName, userName, email, password: passwordHash })
    // return res.status(200).send({
    //     status: "Success",
    //     message: "Usuario creado con exito"
    // })
    return res.status(200).send({example})

}

export default createUser