import { ADD_USER, GET_CURRENT_USER, REMOVE_USER } from './types';

const userInitialState = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
	role: '',
};

export const userReducer = (state = userInitialState, action) => {
	switch (action.type) {
		case ADD_USER:
			return {
				...state,
				name: action.payload.name,
				email: action.payload.email,
				token: action.payload.token,
				isAuth: true,
				role: action.payload.role,
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
		case GET_CURRENT_USER:
			return state;
		default:
			return state;
	}
};
