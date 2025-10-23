import { Game } from "../models/games.model.js";



const getGames = async () => {

	const games = await Game.find();

	if (!games){
		const error = new Error("DATA_NOT_FOUND");
		error.code = 'DATA_NOT_FOUND';
		throw error;
	}

	return games;
}


const getGame = async (id) => {
	
	const game = await Game.findOne({_id: id});

	if (!game){
		const error = new Error("DATA_NOT_FOUND");
		error.code = 'DATA_NOT_FOUND';
		throw error;
	}

	return game;
}

const postGame = async (data) => {

	const game = await Game.create({name: data.name})

	if (game){
		const error = new Error('AUTH_ERROR');
		error.code = 'AUTH_ERROR';
		throw error;
	}

	const newGame = await Game.insertOne(data);
	console.log(newGame.name)

	return newGame.name
}


export {
	getGames,
	getGame,
	postGame
}