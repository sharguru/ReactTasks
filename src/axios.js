import axios from 'axios';

export const Axios = axios.create({
	baseURL: 'http://localhost:4000',
	headers: {
		'X-Custom-Header': 'foobar',
	},
});

Axios.interceptors.request.use(function (config) {
	const token = localStorage.getItem('token');
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}

	return config;
});
