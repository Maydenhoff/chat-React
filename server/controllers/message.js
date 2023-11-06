import Message from  "../Models/message.js"


const controller = {
    save : (req, res)  => {
    console.log("llegue");
    const body = req.body
 const message = new Message()
 message.message = body.message
 message.from = body.from

 console.log("lleguee acaa");
 if(!message.message) {
     return res.status(404).send({
         status:"error",
         message: "No ha sido posible guardar el mensaje"
     })

 } 

 message.save()

    return res.status(200).send({
        status: "Success",
    message    })
  },

getMessages : async(req, res) => {
   const allMessages = await Message.find({})
   console.log("allMessages", allMessages);
//    allMessages.sort("-id")
    //    if(error) {
    //        return res.status(500).send({
    //            status:"Error",
    //            message: "Error al extraer los datos"
    //        })
    //    }

    //    if(!messages) {
    //        return res.status(404).send({
    //            status:"Error",
    //            message: "No hay mensajes que mostrar"
    //        })
    //    }
       return res.status(200).send({
           status: "Success",
           messages: allMessages
       })
   
}
}

export default controller
