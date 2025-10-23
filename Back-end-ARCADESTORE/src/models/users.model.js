import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true,
            unique: true
        },
        password:{
            type: String,
            require: true
        },
        rol:{
            type: String,
            require: true
        },
        games:{
            type: Array,
            require: false
        },
        dateBirthday: {
            type: Date
        },
    }
)

export const User = mongoose.model("User", userSchema);