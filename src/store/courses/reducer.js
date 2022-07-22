import {
	ADD_COURSE,
	DELETE_COURSE,
	FILTER_COURSE,
	GET_COURSE,
	SET_INITIAL_COURSE,
	UPDATE_COURSE,
} from './types';

const courseInitialState = [];

export const courseReducer = (state = courseInitialState, action) => {
	switch (action.type) {
		case ADD_COURSE:
			return [...state, ...action.payload];
		case DELETE_COURSE:
			return state.filter((item) => item.id !== action.payload);
		case UPDATE_COURSE:
			let res = state.filter((item) => item.id === action.payload.id);
			return {
				...state,
				...[
					{
						...res,
						...action.payload,
					},
				],
			};
		// if (item.id === action.payload.id) {
		// 	return {
		// 		...item,
		// 		...action.payload,
		// 	};
		// }

		case FILTER_COURSE:
			return state.filter(
				(item) =>
					item.id.includes(action.payload) ||
					item.title.includes(action.payload)
			);
		case GET_COURSE:
			return state;
		case SET_INITIAL_COURSE:
			return [...action.payload];
		default:
			return state;
	}
};
