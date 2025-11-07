import express from 'express'
import dotenv from 'dotenv'
import { connectToMongo } from './configs/mongodb.config.js';
import routes from './routes/index.routes.js'
import cors from 'cors'

dotenv.config()

const app = express();
const port = process.env.PORT;

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

app.use(cors({
    origin: '*'
}))

app.use("/",routes);
/*
const serverStart = async () => {
    try{
        await connectToMongo();
        app.listen(port, () => console.log("servidor iniciado"));
    }catch (error){
        console.error("Error en el servidor")
    }
};

serverStart()*/


connectToMongo()
    .then(() => console.log("MongoDB conectado"))
    .catch(err => console.error("Error conectando a MongoDB:", err));

// ❌ No pongas app.listen() aquí
// ✅ En su lugar, exporta la app
export default app;