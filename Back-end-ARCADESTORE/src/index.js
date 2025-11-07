
import express from 'express';
import dotenv from 'dotenv';
import connectToMongo from './configs/mongodb.config.js';
import routes from './routes/index.routes.js';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(express.json({ limit: '10MB' }));
app.use(express.urlencoded({ limit: '10MB', extended: true }));
app.use(cors({
    origin: '*' 
}));

app.use("/", routes);

connectToMongo()
    .then(() => console.log("MongoDB conectado"))
    .catch(err => console.error("Error conectando a MongoDB:", err));

export default app; 
