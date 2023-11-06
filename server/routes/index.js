import {Router} from "express"
import messageRouter from "./message.js"
import userRouter from "./userRouter.js"

const router = Router()

router.use("/message", messageRouter)
router.use("/user", userRouter)
export default router