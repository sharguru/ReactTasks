import {
	ADD_COURSE,
	DELETE_COURSE,
	FILTER_COURSE,
	GET_COURSE,
	SET_INITIAL_COURSE,
	UPDATE_COURSE,
} from './types';

export const addNewCourseAction = (payload) => ({ type: ADD_COURSE, payload });
export const deleteCourseAction = (payload) => ({
	type: DELETE_COURSE,
	payload,
});
export const updateCourseAction = (payload) => ({
	type: UPDATE_COURSE,
	payload,
});
export const filterCourse = (payload) => ({ type: FILTER_COURSE, payload });
export const getCourse = (payload) => ({ type: GET_COURSE, payload });
export const setInitialStateToCourse = (payload) => ({
	type: SET_INITIAL_COURSE,
	payload,
});
