import { create } from 'zustand'
import type { GameType } from '../types/gameType'

type ShoppingCartStore = {
    shoppingCardtList: GameType[];
    saveShoppingCardt: (game:GameType) => void;
    clearShoppingCardt: () => void;
    deleteShoppingCardt: (_id: GameType['_id']) => void;
}

export const useShoppingCart = create<ShoppingCartStore>((set) => ({
    shoppingCardtList: [],
    
    saveShoppingCardt: (game) => set((state) => ({
        shoppingCardtList: [
            ...state,
        ]
    })),
}))