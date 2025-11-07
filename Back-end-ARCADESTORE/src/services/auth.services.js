import { issueAccessToken } from "../helpers/auth.helper.js"
import { User } from "../models/users.model.js"



const login = async (data) => {

    const userValied = await User.findOne({email: data.email, password: data.password}) 

    if (!userValied){
        const error = new Error('AUTH_ERROR')
        error.code = 'AUTH_ERROR'
        throw error;
    }

    if (!userValied.active){
        const error = new Error('LOCKED')
        error.code = 'LOCKED'
        throw error;
    }

    const token = await issueAccessToken({sub: userValied._id, role: userValied.role})

    return {
        token: token,
        user: {
            _id: userValied._id,
            firstName: userValied.firstName,
            firstLastName: userValied.firstLastName,
            email: userValied.email,
            role: userValied.role,
            games: userValied.games || [],
        },
    }
}

export {
    login
}