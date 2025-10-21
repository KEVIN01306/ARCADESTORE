import { Game } from "../models/games.model.js";



const getGames = async () => {

	const games = await Game.find();

	if (!games){
		const error = new Error("DATA_NOT_FOUND");
		error.code('DATA_NOT_FOUND')
		throw error;
	}

	return games;
}


export {
	getGames
}