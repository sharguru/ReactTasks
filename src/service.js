import { Axios } from './axios';

export const login = (data) => {
	return Axios.post('/login', data);
};

export const register = (data) => {
	return Axios.post('/register', data);
};

export const logout = () => {
	return Axios.delete('/logout');
};

export const getAllCoursesAxios = () => {
	return Axios.get('/courses/all');
};
export const getAllAuthorsAxios = () => {
	return Axios.get('/authors/all');
};

export const getCurrentUserAxios = () => {
	return Axios.get('/users/me');
};
export const deleteCourseAxios = (id) => {
	return Axios.delete(`/courses/${id}`);
};

export const addNewCourseAxios = (newCourseData) => {
	return Axios.post('/courses/add', newCourseData);
};

export const createNewAuthorAxios = (newAuthorData) => {
	return Axios.post('/authors/add', newAuthorData);
};

export const updateCourseAxios = (id, updateCourseData) => {
	return Axios.put(`/courses/${id}`, updateCourseData);
};
