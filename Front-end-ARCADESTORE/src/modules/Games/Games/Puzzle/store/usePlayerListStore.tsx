import { create } from "zustand";
import type{ PlayerType } from "../components/TableRank";
import type { CronometroType } from "../utilities/Cronometros";

type PlayerListStore = {
    rankList: PlayerType[];
    saveRankList: (newName: string, newMovements: number, time: CronometroType ) => void
}

export const usePlayerListStore = create<PlayerListStore>( (set) => ({
    rankList: [],

    saveRankList:  (newName: string ,newMovements: number, time: CronometroType ) => set((state) => ({
        rankList: [
            ...state.rankList,
            {
                name: newName,
                movements: newMovements,
                time: time
            }
        ]
    }))
}));