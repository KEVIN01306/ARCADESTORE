import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            require: true
        },
        secondName: {
            type: String,
            require: false
        },
        firstLastName: {
            type: String,
            require: true
        },
        secondLastName: {
            type: String,
            require: false
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
        role:{
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
        active: {
            type: Boolean,
            required: true
        },
        
    }
)

export const User = mongoose.model("User", userSchema);