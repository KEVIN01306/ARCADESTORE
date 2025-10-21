import { getUSers } from "../services/users.service.js";


const getUserHandler = async (req,res) =>{
    const users = await getUSers();

    return res.status(200).json({
        data: users
    })
}


export {
    getUserHandler,
}