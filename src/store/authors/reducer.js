import { mockedAuthorsList } from '../../constants';
import { ADD_AUTHOR, GET_AUTHOR } from './types';

const authorInitialState = mockedAuthorsList;

export const authorReducer = (state = authorInitialState, action) => {
	switch (action.type) {
		case ADD_AUTHOR:
			return [...state, ...action.payload];
		case GET_AUTHOR:
			return state;
		default:
			return state;
	}
};
