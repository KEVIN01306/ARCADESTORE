import z from "zod";
import { rankingSchema } from "../zod/ranking.schema";

export type  RankingType = z.infer<typeof rankingSchema>;


export const rankingInitialState = {
    userId: "",
    userName: "",
    score: 0,
    movements: 0,
    time:""
}
