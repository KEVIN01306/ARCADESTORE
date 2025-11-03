import { create } from "zustand";
import type{ PlayerType } from "../components/TableRank";

type PlayerListStore = {
    rankList: PlayerType[];
    saveRankList: (newName: string, newScore: number) => void
}

export const usePlayerListStore = create<PlayerListStore>( (set) => ({
    rankList: [],

    saveRankList:  (newName: string ,newScore: number) => set((state) => ({
        rankList: [
            ...state.rankList,
            {
                name: newName,
                score: newScore,
            }
        ]
    }))
}));