import axios from "axios";
import type { UserType } from "../types/userType";
import type { apiResponse } from "../types/apiResponse";
const API_URL = import.meta.env.VITE_DOMAIN
const API_USERS = API_URL + "users"
const api = axios;

const getUsers = async (): Promise<UserType[]> => {
    try {
        const response = await api.get<apiResponse<UserType[]>>(API_USERS)
        const users = response.data.data

        if (!Array.isArray(users)) {
            throw new Error("INVALID_API_RESPONSE_FORMAT");
        }

        if (users.length == 0) {
            throw new Error("DATA_NOT_FOUND")
        }

        return users;

    } catch (error) {
        if (api.isAxiosError(error)) {
            const status = error.response?.status;

            if (status == 500) {
                throw new Error("INTERNAL ERROR SERVER")
            }

            const serverMessage = error.response?.data?.message;
            if (serverMessage) {
                throw new Error(serverMessage)
            }
            throw new Error("CONNECTION ERROR")
        }

        throw new Error((error as Error).message)

    }
}

const getUser = async (id: UserType['_id']): Promise<UserType> => {
    try {
        const response = await api.get<apiResponse<UserType>>(API_USERS+"/"+id)
        const user = response.data.data

        if (!user) {
            throw new Error("DATA_NOT_FOUND")
        }

        console.log(user)

        return user;

    } catch (error) {
        if (api.isAxiosError(error)) {
            const status = error.response?.status;

            if (status == 500) {
                throw new Error("INTERNAL ERROR SERVER")
            }


            const serverMessage = error.response?.data?.message;
            if (serverMessage) {
                throw new Error(serverMessage)
            }
            throw new Error("CONNECTION ERROR")
        }

        throw new Error((error as Error).message)

    }
}



const postUser = async(user: UserType)  => {
    try{

    const response = await api.post<apiResponse<UserType>>(API_USERS,user)

    return String(response.data.data)

    }catch (error){
        console.log(error)
                if (api.isAxiosError(error)){
            const status = error.response?.status;

            if (status === 404){
                throw new Error("NOT FOUND API OR NOT EXISTED IN THE SERVER")
            }

            if (status == 500){
                throw new Error("INTERNAL ERROR SERVER")
            }
            const serverMessage = error.response?.data?.message;

            if (status == 400 && serverMessage == "CONFLICT"){
                throw new Error("AL READY EXIST THIS USER")
            }

            if (serverMessage){
                throw new Error(serverMessage)
            }

            throw new Error("CONNECTION ERROR")

        }

        throw new Error((error as Error).message)
    
    }
}


const putUser = async(id: UserType['_id'] ,user: UserType)  => {
    try{

    const response = await api.put<apiResponse<UserType>>(API_USERS+"/"+id,user)

    return String(response.data.data)

    }catch (error){
        console.log(error)
                if (api.isAxiosError(error)){
            const status = error.response?.status;

            if (status === 404){
                throw new Error("NOT FOUND API OR NOT EXISTED IN THE SERVER")
            }

            if (status == 500){
                throw new Error("INTERNAL ERROR SERVER")
            }
            const serverMessage = error.response?.data?.message;

            if (status == 400 && serverMessage == "CONFLICT"){
                throw new Error("AL READY EXIST THIS GAME")
            }

            if (serverMessage){
                throw new Error(serverMessage)
            }

            throw new Error("CONNECTION ERROR")

        }

        throw new Error((error as Error).message)
    
    }
}



const patchUserActive = async(id: UserType['_id'])  => {
    try{

    const response = await api.patch<apiResponse<UserType>>(API_USERS+"/"+id)

    return response.data.data

    }catch (error){
        console.log(error)
                if (api.isAxiosError(error)){
            const status = error.response?.status;

            if (status === 404){
                throw new Error("NOT FOUND API OR NOT EXISTED IN THE SERVER")
            }

            if (status == 500){
                throw new Error("INTERNAL ERROR SERVER")
            }
            const serverMessage = error.response?.data?.message;

            if (status == 400 && serverMessage == "CONFLICT"){
                throw new Error("AL READY EXIST THIS GAME")
            }

            if (serverMessage){
                throw new Error(serverMessage)
            }

            throw new Error("CONNECTION ERROR")

        }

        throw new Error((error as Error).message)
    
    }
}


export {
    getUsers,
    getUser,
    postUser,
    putUser,
    patchUserActive
}