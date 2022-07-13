import { ADD_AUTHOR, GET_AUTHOR, SET_INITIAL_AUTHOR } from './types';

export const getAuthor = () => ({ type: GET_AUTHOR });
export const addAuthor = (payload) => ({ type: ADD_AUTHOR, payload });
export const setInitialStateToAuthor = (payload) => ({
	type: SET_INITIAL_AUTHOR,
	payload,
});
