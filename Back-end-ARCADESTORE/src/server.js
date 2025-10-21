import express from 'express'
import dotenv from 'dotenv'
import { connectToMongo } from './configs/mongodb.config.js';
import routes from './routes/index.routes.js'

dotenv.config()

const app = express();
const port = process.env.PORT;
app.use(express.json());

app.use("/",routes);

const serverStart = async () => {
    try{
        await connectToMongo();
        app.listen(port, () => console.log("servidor iniciado"));
    }catch (error){
        console.error("Error en el servidor")
    }
};

serverStart()