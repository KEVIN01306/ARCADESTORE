import type{ userSchema } from '../zod/user.schema'
import z from 'zod'

export type UserType = z.infer<typeof userSchema>

export const UserInitialState = {
    _id: "",
    firsName: "",
    secondName: "",
    fistLastName: "",
    secondLastName: "",
    email: "",
    password: "",
    games: [],
    dateBirthday: "",
    active: true
}