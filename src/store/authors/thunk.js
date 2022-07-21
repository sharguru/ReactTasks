import { createNewAuthorAxios, getAllAuthorsAxios } from '../../service';
import { addAuthor, setInitialStateToAuthor } from './actions';

export const getAllAuthors = () => {
	return async function (dispatch) {
		const response = await getAllAuthorsAxios();

		dispatch(setInitialStateToAuthor(response.data.result));
	};
};
export const createNewAuthor = (newAuthorData) => {
	return async function (dispatch) {
		const res = await createNewAuthorAxios(newAuthorData);
		dispatch(addAuthor([res.data.result]));
	};
};
