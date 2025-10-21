import { getGames } from "../services/games.service.js";


const getGamesHandler = async (req,res) =>{
    const games = await getGames();

    return res.json({
        data: games
    })
}


export {
    getGamesHandler,
}