import { create } from "zustand";
import type { AuthType } from "../types/authType";
import { persist } from "zustand/middleware";
import { postLogin } from "../services/auth.services";
import type { GameType } from "../types/gameType";

interface AuthState {
    user: any;
    token: string | null;
    error: null | string;

    login: (data: AuthType) => Promise<void>;
    logout: () => void;
    refreshGames: (gameIds: GameType['_id'][]) => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set, get) => ({
            user: null,
            token: null,
            error: null,

            login: async (data: AuthType) => {
                try {
                    set({ error: null });
                    const { user, token } = await postLogin(data);
                    set({ user, token });
                } catch (error: any) {
                    set({ error: error.message });
                    throw error;
                }
            },

            logout: () => {
                set({ user: null, token: null });
            },

            refreshGames: (gameIds) => {
                const { user } = get();
                if (!user) return;

                const updatedGames = Array.from(new Set([...user.games, ...gameIds]));

                set({
                    user: {
                        ...user,
                        games: updatedGames,
                    },
                });
            },
        }),
        {
            name: "auth-storage",
            partialize: (state) => ({
                user: state.user,
                token: state.token,
            }),
        }
    )
);
