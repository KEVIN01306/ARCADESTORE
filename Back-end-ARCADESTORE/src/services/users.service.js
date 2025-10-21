import { User } from "../models/users.model.js"


const getUSers = async () => {

	const users = await User.find();

	if (!users){
		const error = new Error("DATA_NOT_FOUND");
		error.code('DATA_NOT_FOUND')
		throw error;
	}

	return users;
}




export {
	getUSers
}