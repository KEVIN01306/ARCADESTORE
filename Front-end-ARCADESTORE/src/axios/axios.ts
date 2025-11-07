import axios from "axios";
import { useAuthStore } from "../store/useAuthStore";

export const api = axios.create({
    baseURL: import.meta.env.VITE_DOMAIN,
    timeout: 10_000,
    headers: { 'Content-Type': 'application/json'},
})

api.interceptors.request.use((config) => {
    const token = useAuthStore.getState().token
    if (token) {
        config.headers = config.headers ?? {}
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

api.interceptors.response.use(
    (res) => res,
    (error) => {
        if(error.response.status == 401){
            window.location.href = '/public/auth/login'
        }
        return Promise.reject(error)
    }
)