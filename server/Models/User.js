import {mongoose}  from "mongoose";

const Schema = mongoose.Schema
const UserSchema = new Schema({

    name: String,
    lastName: String,
    userName: String,
    password: String,
    email: String
}
    )


export default mongoose.model("User", UserSchema)

