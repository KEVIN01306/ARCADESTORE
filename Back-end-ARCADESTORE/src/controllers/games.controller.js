import { postGame, getGames, getGame } from "../services/games.service.js";
import { responseSuccesAll,responseSucces, responseError } from "../helpers/response.helper.js";
import { schemaGame } from "../schemas/game.schema.js";

const getGamesHandler = async (req,res) =>{
    try {
        const games = await getGames();

        res.status(200).json(responseSuccesAll("games successfully obtained",games))
    }catch (error){
        let errorCode = 500;
        let errorMessage = 'INTERNAL_SERVER_ERROR'
        switch(error.code){
            case 'DATA_NOT_FOUND':
                errorCode = 404;
                errorMessage = error.code;
                break;
        }

        return res.status(errorCode).json(responseError(errorMessage));
    }
}

const getGameHandler = async(req,res) => {
    try{
        const { id } = req.params;
        const game = await getGame(id);

        return res.status(200).json(responseSucces("game successfully obtained",game))
    }catch (error){
        let errorCode = 500;
        let errorMessage = 'INTERNAL_SERVER_ERROR'
        switch(error.code){
            case 'DATA_NOT_FOUND':
                errorCode = 404;
                errorMessage = error.code;
                break;
        }

        return res.status(errorCode).json(responseError(errorMessage));
    }
    
}

const postGameHandler = async (req,res) => {
    try{
        const data = req.body

        const { error, valueData } = schemaGame.validate(data, { abortEarly: false }) 

    if ( error && error.details ){ 
            return res.status(400).json(responseError(error.details.map(e => e.message)))
        }
        const gameName = await postGame(valueData)

        res.status(201).json(responseSucces("games successfully created  ",gameName))
    }catch (error){
        console.log(error)
    }
   
}


export {
    getGamesHandler,
    getGameHandler,
    postGameHandler
}