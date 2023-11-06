import { Router } from "express";
import controller from "../controllers/message.js";

const messageRouter = Router()

messageRouter.post("/save", controller.save)
messageRouter.get("/messages", controller.getMessages)

export default messageRouter