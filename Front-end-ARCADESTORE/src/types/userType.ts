import type{ userSchema } from '../zod/user.schema'
import z from 'zod'

export type UserType = z.infer<typeof userSchema>

export const UserInitialState = {
    firstName: "",
    secondName: "",
    firstLastName: "",
    secondLastName: "",
    email: "",
    password: "",
    games: [],
    role: "user",
    dateBirthday: new Date().toISOString().split("T")[0],
    active: true
}