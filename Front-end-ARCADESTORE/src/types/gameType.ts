import type { gameSchema } from "../zod/game.schema";
import { z } from 'zod'



export type GameType = z.infer<typeof gameSchema>;


export const GameInitialState = {
    name: "",
    type: "Free",
    price: 0,
    background: "",
    context: "",
    category: "E",
}


export const ESRB_RATINGS = {
    E_EVERYONE: {
        code: "E",
        minimum_age: 6,
        description: "Content is generally suitable for all ages."
    },
    E10_PLUS: {
        code: "E10+",
        minimum_age: 10,
        description: "Content is generally suitable for ages 10 and up."
    },
    T_TEEN: {
        code: "T",
        minimum_age: 13,
        description: "Content is generally suitable for ages 13 and up (Teen)."
    },
    M_MATURE: {
        code: "M",
        minimum_age: 17,
        description: "Content is generally suitable for ages 17 and up (Mature)."
    },
    AO_ADULTS_ONLY: {
        code: "AO",
        minimum_age: 18,
        description: "Content is suitable only for adults (18+)."
    }
} as const;

export type RatingKey = keyof typeof ESRB_RATINGS;