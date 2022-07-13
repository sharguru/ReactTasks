import { mockedAuthorsList } from '../constants';

export const getFullAuthors = (authArr) => {
	var authorstr = '';
	authArr?.forEach((element) => {
		mockedAuthorsList.forEach((e) => {
			if (e.id === element) {
				authorstr = authorstr + e.name + ',';
			}
		});
	});
	let res = authorstr.slice(0, -1) + '.';
	return res;
};
