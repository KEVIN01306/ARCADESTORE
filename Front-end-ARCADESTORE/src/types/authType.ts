import { z } from 'zod'
import type { authSchema } from '../zod/auth.schema';
import type { UserType } from './userType';



export type AuthType = z.infer<typeof authSchema>;


export const AuthInitialState = {
    email: "",
    Password: ""
}

export type AuthResponse = {
    user: UserType,
    token: string
}
