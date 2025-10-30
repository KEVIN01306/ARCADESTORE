import { create } from 'zustand'
import type { GameType } from '../types/gameType'
import { persist } from 'zustand/middleware'

type ShoppingCartStore = {
    shoppingCardtList: GameType[];
    saveShoppingCart: (game: GameType) => void;
    clearShoppingCart: () => void;
    deleteShoppingCart: (_id: GameType['_id']) => void;
}

export const useShoppingCart = create<ShoppingCartStore>()(
    persist(
        (set/*,get*/) => ({
            shoppingCardtList: [],

            saveShoppingCart: (game) => set((state) => {
                const isGameCart = state.shoppingCardtList.some(gameItem => gameItem._id == game._id)

                if (isGameCart) {
                    return state;
                }
                return {
                    ...state,
                    shoppingCardtList: [
                        ...state.shoppingCardtList,
                        game
                    ]
                }
            }),

            clearShoppingCart: () => set(() => {
                return {
                    shoppingCardtList: []
                }
            }),

            deleteShoppingCart: (_id) => set((state) => {
                const newShoppingCardtList = state.shoppingCardtList.filter((game) => game._id != _id);

                return {
                    ...state,
                    shoppingCardtList: newShoppingCardtList
                }
            }),
        }),
        {
            name: 'shoping-cart-storage'
        }
    )
)