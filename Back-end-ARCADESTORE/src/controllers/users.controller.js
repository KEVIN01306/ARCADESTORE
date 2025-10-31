import { responseError, responseSuccesAll } from "../helpers/response.helper.js";
import { getUSers } from "../services/users.service.js";


const getUserHandler = async (req,res) =>{
    try {
        const users = await getUSers();

        res.status(200).json(responseSuccesAll("users successfully obtained",users))

    }catch (error) {
        return res.status(500).json(responseError(error))
    }

}


export {
    getUserHandler,
}