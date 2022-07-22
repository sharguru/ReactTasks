import { Axios } from '../../axios';
import { addUserInfo } from './actions';

export const getCurrentUser = () => {
	return async function (dispatch) {
		let response = await Axios.get('/users/me', {
			headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
		});
		dispatch(
			addUserInfo({
				...response.data.result,
				token: localStorage.getItem('token'),
			})
		);
	};
};
