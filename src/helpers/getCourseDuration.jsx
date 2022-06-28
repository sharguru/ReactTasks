export const getCourseDuration = (time) => {
	let hours = Math.floor(time / 60);
	let minutes = time % 60;
	if (hours < 10) {
		if (hours === 0) {
			hours = '00';
		} else {
			hours = '0' + hours;
		}
	}
	if (minutes < 10) {
		if (minutes === 0) {
			minutes = '00';
		} else {
			minutes = '0' + minutes;
		}
	}
	let res = hours + ':' + minutes + ' hours';
	return res;
};
