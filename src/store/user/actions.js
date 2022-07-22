import { ADD_USER, GET_CURRENT_USER, REMOVE_USER } from './types';

// eslint-disable-next-line no-unused-vars
export const addUserInfo = (payload) => ({ type: ADD_USER, payload });
// eslint-disable-next-line no-unused-vars
export const removeUserInfo = () => ({ type: REMOVE_USER });
export const getCurrentUserAction = () => ({ type: GET_CURRENT_USER });
