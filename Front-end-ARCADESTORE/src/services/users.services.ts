import axios from "axios";
import type { UserType } from "../types/userType";
import type { apiResponse } from "../types/apiResponse";
const API_URL = import.meta.env.BASE_URL
const API_USERS = API_URL+"users"
const api = axios;

const getUsers =  async(): Promise<UserType[]> => {
    try{
        const response = api.get<apiResponse<UserType[]>>(API_USERS)
        const users = (await response).data.data

        if (!users){
            throw new Error("DATA_NOT_FOUND")
        }


        return users;

    }catch (error) {
        if( api.isAxiosError(error) ) {
            const status = error.response?.status
        }
    }


}