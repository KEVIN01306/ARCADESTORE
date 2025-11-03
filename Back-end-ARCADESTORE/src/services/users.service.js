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

const getUSer = async (id) => {

	const user = await User.findOne({ _id: id });

	if (!user){
		const error = new Error("DATA_NOT_FOUND");
		error.code('DATA_NOT_FOUND')
		throw error;
	}

	return user;
}


const postUser = async (data) => {
	
		const user = await User.findOne({ email: data.email })

		if (user) {
			const error = new Error('CONFLICT');
			error.code = 'CONFLICT';
			throw error;
		}

		const newUSer = await User.create(data);
		console.log(newUSer.email)

		return newUSer.email
}





export {
	getUSers,
	getUSer,
	postUser,
}