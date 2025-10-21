import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
        dateBirthday: {
            type: Date
        },
        email: {
            type: String,
            require: true,
            unique: true
        }
    }
)

export const User = mongoose.model("User", userSchema);