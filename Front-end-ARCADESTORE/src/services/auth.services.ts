import axios from "axios";
import type { AuthResponse, AuthType } from "../types/authType";
import type { apiResponse } from "../types/apiResponse";
import type { UserType } from "../types/userType";

const API_URL = import.meta.env.VITE_DOMAIN
const API_AUTH = API_URL + "auth"
const api = axios

const postLogin = async (auth: AuthType): Promise<AuthResponse> => {
    try {
        const response = await api.post<apiResponse<AuthResponse>>(API_AUTH, auth)

        if (!response.data.data) {
            throw new Error("INVALID RESPONSE FROM THE API");
        }
        const { user, token } = response.data.data


        return { user, token }

    } catch (error) {
        console.log(error)
        if (api.isAxiosError(error)) {
            const status = error.response?.status;

            if (status === 404) {
                throw new Error("NOT FOUND API OR NOT EXISTED IN THE SERVER")
            }

            if (status == 500) {
                throw new Error("INTERNAL ERROR SERVER")
            }
            const serverMessage = error.response?.data?.message;


            if (status == 400 && serverMessage == "AUTH_ERROR") {
                throw new Error("THE EMAIL OR PASSWORD NOT IS CORRECT ")
            }

            if (status == 400 && serverMessage == "CONFLICT") {
                throw new Error("AL READY EXIST THIS GAME")
            }

            if (status == 423 ) {
                throw new Error("THIS USER IS BLOCKED")
            }

            if (serverMessage) {
                throw new Error(serverMessage)
            }

            throw new Error("CONNECTION ERROR")

        }

        throw new Error((error as Error).message)

    }
}



const postRegister = async (user: UserType) => {
    try {

        const response = await api.post<apiResponse<UserType>>(API_AUTH+"/register", user)

        return String(response.data.data)

    } catch (error) {
        console.log(error)
        if (axios.isAxiosError(error)) {
            const status = error.response?.status;

            if (status === 404) {
                throw new Error("NOT FOUND API OR NOT EXISTED IN THE SERVER")
            }

            if (status == 500) {
                throw new Error("INTERNAL ERROR SERVER")
            }
            const serverMessage = error.response?.data?.message;

            if (status == 400 && serverMessage == "CONFLICT") {
                throw new Error("AL READY EXIST THIS USER")
            }

            if (serverMessage) {
                throw new Error(serverMessage)
            }

            throw new Error("CONNECTION ERROR")

        }

        throw new Error((error as Error).message)

    }
}


export {
    postLogin,
    postRegister
}