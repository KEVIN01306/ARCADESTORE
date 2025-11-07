import { verifyAccessToken } from "../helpers/auth.helper.js"
import { responseError, responseSucces } from "../helpers/response.helper.js"
import { schemaAuth } from "../schemas/auth.schema.js"
import { schemaUser } from "../schemas/user.schema.js"
import { login } from "../services/auth.services.js"
import { postUser } from "../services/users.service.js"


const loginHandler = async (req,res) => {
    try {
        const data = req.body

        const { error,  value } = schemaAuth.validate(data, { abortEarly: false })
        
        if (error) {
            return res.status(400).json("incorrect credentials")
        }


        const token = await login(value)

        res.status(200).json(responseSucces('approved credentials', token))

    }catch (error) {
    let errorCode = 500;
    let errorMessage = 'INTERNAL_SERVER_ERROR';
    switch(error.code){
      case 'DATA_NOT_FOUND':
        errorCode = 404;
        errorMessage = error.code;
        break;
        case 'AUTH_ERROR':
            errorCode = 400;
            errorMessage = error.code;
            break;
        case 'LOCKED':
            errorCode = 423;
            errorMessage = error.code;
            break
    }

    return res.status(errorCode).json({
      message: errorMessage
    });
  }
}



const verifyTokenHandler = () => {
  return async (req, res, next) => {
      try {
        const auth = req.header('Authorization');
        const token = auth.startsWith('Bearer ') ? auth.slice(7) : null;
        if (!token) return res.status(401).json({ error: 'Bearer token no enviado' });
  
        await verifyAccessToken(token);
        
        next();
      } catch (err) {
        return res.status(401).json(responseError('Token invalido o expirado'));
      }
    };
}


const registerHandler = async (req,res) => {
    try{
        const data = req.body

        
        const user = {
            firstName: data.firstName,
            secondName: data.secondName,
            firstLastName: data.firstLastName,
            secondLastName: data.secondLastName,
            email: data.email,
            password: data.password,
            role: "user",
            games: [],
            dateBirthday: data.dateBirthday,
            active: true
        }

        const { error, value } = schemaUser.validate(user, { abortEarly: false }) 

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



export {
    loginHandler,
    verifyTokenHandler,
    registerHandler
};