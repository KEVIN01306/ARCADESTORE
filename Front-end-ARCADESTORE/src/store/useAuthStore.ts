import { create } from "zustand";
import type { AuthType } from "../types/authType";
import type { UserType } from "../types/userType";
import { persist } from "zustand/middleware";
import { postLogin } from "../services/auth.services";



interface AuthState{
    user: UserType | null;
    token: string | null;
    error: null | string;

    login: (data: AuthType) => Promise<void>
    logout: () => void
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            token: null,
            error: null,

            login: async (data: AuthType) => {
                try{
                    set({ error: null});

                    const { user, token } = await postLogin(data);

                    set({
                        user,
                        token,
                    })
                }catch (error: any){
                    set({
                        error: error.message,
                    })

                    throw error
                }
            },

            logout: () => {
                set({ user: null, token: null})
            }
        }),
        {
            name: "auth-storage",
            partialize: (state) => ({
                user: state.user,
                token: state.token,
            })
        }
    )
)
