import { mockedAuthorsList } from '../constants';
export const getAuthors = (authArr) => {
	let authorstr = '';
	authArr.forEach((element) => {
		mockedAuthorsList.forEach((e) => {
			if (e.id === element) {
				authorstr = authorstr + e.name + ',';
			}
		});
	});
	let res = '';
	if (authorstr.length > 25) {
		res = authorstr.substring(0, 23) + '...';
	} else {
		res = authorstr.substring(0, authorstr.length - 1);
	}
	return res;
};
