import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
const store = configureStore({
	reducer: rootReducer,
	middleware: [thunk],
});
export function setupStore(preloadedState) {
	return configureStore({
		reducer: rootReducer,
		preloadedState,
	});
}
export default store;
