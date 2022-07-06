import { getFullAuthors } from './getFullAuthors';
export const getAuthors = (authArr) => {
	let res = getFullAuthors(authArr);
	if (res.length > 25) {
		res = res.substring(0, 23) + '...';
	} else {
		res = res.substring(0, res.length - 1);
	}
	return res;
};
