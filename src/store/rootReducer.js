import { combineReducers } from 'redux';
import { authorReducer } from './authors/reducer';
import { courseReducer } from './courses/reducer';
import { userReducer } from './user/reducer';

const rootReducer = combineReducers({
	user: userReducer,
	course: courseReducer,
	author: authorReducer,
});

export default rootReducer;
