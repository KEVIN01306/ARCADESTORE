import { responseError, responseSucces, responseSuccesAll } from "../helpers/response.helper.js";
import { schemaUser } from "../schemas/user.schema.js";
import { getUSer, getUSers, patchUserActive, patchUserGame, patchUserGameMultiple, postUser, putUser } from "../services/users.service.js";


const getUsersHandler = async (req, res) => {
    try {
        const users = await getUSers();

        res.status(200).json(responseSuccesAll("users successfully obtained", users))

    } catch (error) {
        let errorCode = 500;
        let errorMessage = 'INTERNAL_SERVER_ERROR'
        switch (error.code) {
            case 'DATA_NOT_FOUND':
                errorCode = 404;
                errorMessage = error.code;
                break;
        }

        return res.status(errorCode).json(responseError(errorMessage));
    }

}

const getUserHandler = async (req, res) => {
    try {
        const { id } = req.params
        const user = await getUSer(id);

        res.status(200).json(responseSucces("user successfully obtained", user))

    } catch (error) {
        let errorCode = 500;
        let errorMessage = 'INTERNAL_SERVER_ERROR'
        switch (error.code) {
            case 'DATA_NOT_FOUND':
                errorCode = 404;
                errorMessage = error.code;
                break;
        }

        return res.status(errorCode).json(responseError(errorMessage));
    }

}



const postUserHandler = async (req,res) => {
    try{
        const data = req.body

        const { error, value } = schemaUser.validate(data, { abortEarly: false }) 

        console.log(data)

    if ( error && error.details ){ 
            return res.status(400).json(responseError(error.details.map(e => e.message)))
        }
        const userEmail = await postUser(value)

        res.status(201).json(responseSucces("User successfully created  ",userEmail))
    }catch (error){
        let errorCode = 500;
        let errorMessage = 'INTERNAL_SERVER_ERROR'
        console.log(error)
        switch(error.code){
            case 'CONFLICT':
                errorCode = 400;
                errorMessage = error.code;
                break;
        }

        return res.status(errorCode).json(responseError(errorMessage));
    }
   
}



const putUserHandler = async (req,res) => {
    try{
        const { id } = req.params
        const data = req.body

        const { error, value } = schemaUser.validate(data, { abortEarly: false }) 

    if ( error && error.details ){ 
            return res.status(400).json(responseError(error.details.map(e => e.message)))
        }
        const UserEmail = await putUser(id,value)

        res.status(200).json(responseSucces("User successfully updated  ",UserEmail))
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

const patchUserActiveHandler = async (req, res) => {
    try {

        const { id } = req.params; 

        const result = await patchUserActive(id); 
        res.status(200).json(responseSucces("User active state successfully toggled", result));

    } catch (error) {
        let errorCode = 500;
        let errorMessage = 'INTERNAL_SERVER_ERROR';
        switch (error.code) {
            case 'DATA_NOT_FOUND':
                errorCode = 404;
                errorMessage = error.code;
                break;
        }

        console.error(error);
        return res.status(errorCode).json(responseError(errorMessage));
    }
}



const patchUserGameHandler = async (req, res) => {
    try {

        const userId = req.params.id; 

        const { gameId } = req.body;

        const result = await patchUserGame(userId, gameId); 
        res.status(200).json(responseSucces("Transaction Completed", result));

    } catch (error) {
        let errorCode = 500;
        let errorMessage = 'INTERNAL_SERVER_ERROR';
        switch (error.code) {
            case 'DATA_NOT_FOUND':
                errorCode = 404;
                errorMessage = error.code;
                break;
        }

        console.error(error);
        return res.status(errorCode).json(responseError(errorMessage));
    }
}



const patchUserGameMultipleHandler = async (req, res) => {
    try {

        const userId = req.params.id; 

        const { gameIds } = req.body;


        if (!Array.isArray(gameIds) || gameIds.length === 0) {
            return res.status(400).json({ error: "It is required that it be an array 'gameIds'." });
        }

        const result = await patchUserGameMultiple(userId, gameIds); 
        res.status(200).json(responseSucces(`${gameIds.length} games associated.`, result));

    } catch (error) {
        let errorCode = 500;
        let errorMessage = 'INTERNAL_SERVER_ERROR';
        switch (error.code) {
            case 'DATA_NOT_FOUND':
                errorCode = 404;
                errorMessage = error.code;
                break;
        }

        console.error(error);
        return res.status(errorCode).json(responseError(errorMessage));
    }
}



export {
    getUsersHandler,
    getUserHandler,
    postUserHandler,
    putUserHandler,
    patchUserActiveHandler,
    patchUserGameHandler,
    patchUserGameMultipleHandler
}