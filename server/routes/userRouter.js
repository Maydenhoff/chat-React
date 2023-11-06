import { Router } from "express";
import createUser from "../controllers/User/createUser.js";
import loginUser from "../controllers/User/loginUser.js";

const userRouter = Router()

userRouter.post("/create", createUser)
userRouter.post("/login", loginUser)


export default userRouter