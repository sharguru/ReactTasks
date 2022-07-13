import { ADD_USER, REMOVE_USER } from './types';

const userInitialState = {
	isAuth: false, // default value - false. After success login - true
	name: '', // default value - empty string. After success login - name of user
	email: '', // default value - empty string. After success login - email of user
	token: '', // default value - empty string or token value from localStorage.
};

export const userReducer = (state = userInitialState, action) => {
	switch (action.type) {
		case ADD_USER:
			console.log(action.payload);
			return {
				...state,
				name: action.payload.user.name,
				email: action.payload.user.email,
				token: action.payload.result,
				isAuth: true,
			};
		case REMOVE_USER: {
			return {
				...state,
				name: '',
				email: '',
				token: '',
				isAuth: false,
			};
		}
		default:
			return state;
	}
};
