import { ADD_AUTHOR, GET_AUTHOR } from './types';

export const getAuthor = () => ({ type: GET_AUTHOR });
export const addAuthor = (payload) => ({ type: ADD_AUTHOR, payload });
