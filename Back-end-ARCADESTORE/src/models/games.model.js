import mongoose from "mongoose";


const gameSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
        type: {
            type: String,
            require: true
        },
        price:{
            type: Number,
            require: true
        },
        background: {
            type: String,
            require: true
        },
        context: {
            type: String,
            require: true
        }
    }
)

export const Game = mongoose.model("Game",gameSchema);