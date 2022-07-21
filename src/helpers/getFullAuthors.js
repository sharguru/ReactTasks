export const getFullAuthors = (authArr, authors) => {
	var authorstr = '';
	authArr?.forEach((element) => {
		authors.forEach((e) => {
			if (e.id === element) {
				authorstr = authorstr + e.name + ',';
			}
		});
	});
	let res = authorstr.slice(0, -1) + '.';
	return res;
};
