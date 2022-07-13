import { ADD_AUTHOR, GET_AUTHOR, SET_INITIAL_AUTHOR } from './types';

const authorInitialState = [];

export const authorReducer = (state = authorInitialState, action) => {
	switch (action.type) {
		case SET_INITIAL_AUTHOR:
			return [...action.payload];
		case ADD_AUTHOR:
			return [...state, ...action.payload];
		case GET_AUTHOR:
			return state;
		default:
			return state;
	}
};
