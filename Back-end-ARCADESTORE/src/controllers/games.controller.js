import { postGame, getGames, getGame, putGame, deleteGame } from "../services/games.service.js";
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

        const { error, value } = schemaGame.validate(data, { abortEarly: false }) 

    if ( error && error.details ){ 
            return res.status(400).json(responseError(error.details.map(e => e.message)))
        }
        const gameName = await postGame(value)

        res.status(201).json(responseSucces("games successfully created  ",gameName))
    }catch (error){
        let errorCode = 500;
        let errorMessage = 'INTERNAL_SERVER_ERROR'
        switch(error.code){
            case 'CONFLICT':
                errorCode = 400;
                errorMessage = error.code;
                break;
        }

        return res.status(errorCode).json(responseError(errorMessage));
    }
   
}

const putGameHandler = async (req,res) => {
    try{
        const { id } = req.params
        const data = req.body

        const { error, value } = schemaGame.validate(data, { abortEarly: false }) 

    if ( error && error.details ){ 
            return res.status(400).json(responseError(error.details.map(e => e.message)))
        }
        const gameName = await putGame(id,value)

        res.status(200).json(responseSucces("games successfully updated  ",gameName))
    }catch (error){
        let errorCode = 500;
        let errorMessage = 'INTERNAL_SERVER_ERROR'
        switch(error.code){
            case 'DATA_NOT_FOUND':
                errorCode = 400;
                errorMessage = error.code;
                break;
        }

        console.log(error)

        return res.status(errorCode).json(responseError(errorMessage));
    }
   
}



const deleteGameHandler = async(req,res) => {
    try{
        const { id } = req.params;
        const game = await deleteGame(id);

        return res.status(202).json(responseSucces("game successfully obtained",game))
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




export {
    getGamesHandler,
    getGameHandler,
    postGameHandler,
    putGameHandler,
    deleteGameHandler
}