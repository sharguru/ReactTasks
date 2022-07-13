import { Axios } from './axios';
import { mockedAuthorsList, mockedCoursesList } from './constants';

export const login = (data) => {
	return Axios.post('/login', data);
};

export const register = (data) => {
	return Axios.post('/register', data);
};

export const getAllCourses = () => {
	return mockedCoursesList;
};
export const getAllAuthors = () => {
	return mockedAuthorsList;
};
//add all other routes
