import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    profileImage: String,
    bio: String,
}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema);

export default User;