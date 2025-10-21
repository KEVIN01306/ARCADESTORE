import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config()

const mongoHost = process.env.MONGO_HOST;
const mongoPort = process.env.MONGO_PORT;
const mongoDB = process.env.MONGO_DB;
const mongoUser = process.env.MONGO_DB_USER;
const mongoPassword = process.env.MONGO_DB_PASSWORD;

const mongoUrl = mongoPort
                ? `mongodb://${mongoUser}:${mongoPassword}@${mongoHost}:${mongoPort}/${mongoDB}?authSource=admin`
                : `mongodb+srv://${mongoUser}:${mongoPassword}@${mongoHost}/${mongoDB}?retryWrites=true&w=majority`;


export const connectToMongo = async () => {

    try{
        await mongoose.connect(mongoUrl,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
        console.log("coneccion exitosa a la base de datos: "+mongoDB)

    }catch (error){
        console.error("error con el servidor de mongo: " + error)
        process.exit(1)
    }
}