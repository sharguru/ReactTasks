import { mockedCoursesList } from '../../constants';
import {
	ADD_COURSE,
	DELETE_COURSE,
	FILTER_COURSE,
	GET_COURSE,
	UPDATE_COURSE,
} from './types';

const courseInitialState = mockedCoursesList;

export const courseReducer = (state = courseInitialState, action) => {
	switch (action.type) {
		case ADD_COURSE:
			return [...state, ...action.payload];
		case DELETE_COURSE:
			return state.filter((item) => item.id !== action.payload);
		case UPDATE_COURSE:
			return state;
		case FILTER_COURSE:
			return state.filter(
				(item) =>
					item.id.includes(action.payload) ||
					item.title.includes(action.payload)
			);
		case GET_COURSE:
			return state;
		default:
			return state;
	}
};
