import User from "../../Models/User.js"
import bcryptjs from "bcryptjs"

const createUser = async(req, res) => {
    console.log("llegue aca user");
    console.log(req.body);
    const {name, lastName, userName, email, password} = req.body
    
    const userNameRepeated = await User.findOne({userName: userName})
    const emailRepeated = await User.findOne({email: email})
    if(!name || !lastName || !userName || !email || !password) {
        return res.status(403).send({
            status:"error",
            message: "Faltan datos."
        })
    }
    if (emailRepeated) {
        return res.status(403).send({
            status:"error",
            message: "Ya existe un usuario registrado con ese email"
        })
    }
    if (userNameRepeated) {
        return res.status(403).send({
            status:"error",
            message: "Ya existe un usuario con ese userName"
        })
    }
    let passwordHash = await bcryptjs.hash(password, 8)
    const user = await User.create({name, lastName, userName, email, password: passwordHash })
    return res.status(201).send({
        status: "Success",
        message: "Usuario creado con éxito."
    })

}

export default createUser