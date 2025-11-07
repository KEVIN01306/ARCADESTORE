import { api } from '../axios/axios';
import axios from 'axios';
import type { apiResponse } from '../types/apiResponse';
import type { GameType } from '../types/gameType';

const API_URL = import.meta.env.VITE_DOMAIN;
const API_GAMES = API_URL + "games"



const getGames = async (): Promise<GameType[]> => {
    try {
        const response = await axios.get<apiResponse<GameType[]>>(API_GAMES);

        const games = response.data.data

        if (!games || games.length == 0) {
            throw new Error("THERE ARE NO GAMES");
        }

        return games
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const status = error.response?.status;

            if (status === 404) {
                throw new Error("NOT FOUND API OR NOT EXISTED IN THE SERVER")
            }

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

const getGame = async (_id: GameType['_id']): Promise<GameType> => {
    try {
        const response = await axios.get<apiResponse<GameType>>(`${API_GAMES}/${_id}`)

        const game = response.data.data;

        if (!game) {
            throw new Error("THERE ARE NO GAME")
        }


        return game;

    } catch (error) {
        if (axios.isAxiosError(error)) {
            const status = error.response?.status;

            if (status === 404) {
                throw new Error("NOT FOUND API OR NOT EXISTED IN THE SERVER")
            }

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


const postGame = async (game: GameType) => {
    try {

        const response = await api.post<apiResponse<GameType>>(API_GAMES, game)

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
                throw new Error("AL READY EXIST THIS GAME")
            }

            if (serverMessage) {
                throw new Error(serverMessage)
            }

            throw new Error("CONNECTION ERROR")

        }

        throw new Error((error as Error).message)

    }
}




const putGame = async (id: GameType['_id'], game: GameType) => {
    try {

        const response = await api.put<apiResponse<GameType>>(API_GAMES + "/" + id, game)

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
                throw new Error("AL READY EXIST THIS GAME")
            }

            if (serverMessage) {
                throw new Error(serverMessage)
            }

            throw new Error("CONNECTION ERROR")

        }

        throw new Error((error as Error).message)

    }
}


const deleteGame = async (id: GameType['_id']) => {
    try {

        const response = await api.delete<apiResponse<GameType>>(API_GAMES + "/" + id)

        return response.data.data?.name

    } catch (error) {
        console.log(error)
        if (axios.isAxiosError(error)) {
            const status = error.response?.status;

            if (status == 500) {
                throw new Error("INTERNAL ERROR SERVER")
            }
            const serverMessage = error.response?.data?.message;

            if (status == 400 && serverMessage == "CONFLICT") {
                throw new Error("AL READY EXIST THIS GAME")
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
    getGames,
    getGame,
    postGame,
    putGame,
    deleteGame
}