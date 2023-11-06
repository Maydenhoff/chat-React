import User from "../../Models/User.js"

const createUser = async(req, res) => {
    console.log("llegue aca user");
    console.log(req.body);
    
    const userNameRepeated = await User.findOne({userName: req.body.userName})
    const emailRepeated = await User.findOne({email: req.body.email})
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
    
    await User.create(req.body)
    return res.status(200).send({
        status: "Success",
        message: "Usuario creado con exito"
    })

}

export default createUser