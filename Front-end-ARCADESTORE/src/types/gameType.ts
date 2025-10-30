import type { gameSchema } from "../zod/game.schema";
import { z } from 'zod'



export type GameType = z.infer<typeof gameSchema>;


export const GameInitialState = {
    name: "",
    type: "Free",
    price: 0,
    background: "",
    context: "",
}