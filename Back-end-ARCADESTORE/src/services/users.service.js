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



const putUser = async (id, data) => {

		const user = await User.findOne({ _id: id })

		if (!user) {
			const error = new Error('DATA_NOT_FOUND');
			error.code = 'DATA_NOT_FOUND';
			throw error;
		}

		const newUser = await User.findByIdAndUpdate(id, data);
		console.log(newUser.email)

		return newUser.email
}

const patchUserActive = async (id) => {
    const user = await User.findOne({ _id: id });

    if (!user) {
        const error = new Error('DATA_NOT_FOUND');
        error.code = 'DATA_NOT_FOUND';
        throw error;
    }

    const newActiveState = !user.active;

    const updatedUser = await User.findByIdAndUpdate(
        id,
        { active: newActiveState },
        { new: true }
    );

    return {
        email: updatedUser.email,
        active: updatedUser.active
    };
}



export {
	getUSers,
	getUSer,
	postUser,
	putUser,
	patchUserActive
}