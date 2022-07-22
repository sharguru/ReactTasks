import {
	addNewCourseAxios,
	deleteCourseAxios,
	getAllCoursesAxios,
	updateCourseAxios,
} from '../../service';
import {
	addNewCourseAction,
	deleteCourseAction,
	setInitialStateToCourse,
	updateCourseAction,
} from './actions';

export const getAllCourses = () => {
	const fetchAllCourse = async (dispatch) => {
		const response = await getAllCoursesAxios();
		dispatch(setInitialStateToCourse(response.data.result));
	};
	return fetchAllCourse;
};

export const deleteCourse = (id) => {
	return async function (dispatch) {
		const response = await deleteCourseAxios(id);
		if (response.data.successful === true) {
			dispatch(deleteCourseAction(id));
		}
	};
};

export const addNewCourse = (data) => {
	return async function (dispatch) {
		const response = await addNewCourseAxios({
			...data,
			duration: Number(data.duration),
		});
		dispatch(addNewCourseAction([response.data.result]));
	};
};

export const updateCourse = (data) => {
	return async function (dispatch) {
		const res = await updateCourseAxios(data.id, {
			...data,
			duration: Number(data.duration),
		});
		dispatch(updateCourseAction([res.data.result]));
	};
};
