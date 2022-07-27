export const buttonTextConstant = {
	ADD_NEW_COURSE: 'Add New Course',
	SHOW_COURSE: 'Show Courses',
	SEARCH: 'Search',
	LOGOUT: 'Logout',
	CREATE_COURSE: 'Create Course',
	CREATE_AUTHOR: 'Create Author',
	ADD_AUTHOR: 'Add Author',
	DELETE_AUTHOR: 'Delete Author',
	REGISTRATION: 'Registration',
	LOGIN: 'Login',
	BACKBUTTON: '◀Back to Courses',
	DELETE: <i className='bi bi-trash'></i>,
	EDIT: <i className='bi bi-pencil'></i>,
	UPDATE: 'Update Course',
};
export const mockedCoursesList = [
	{
		id: 'de5aaa59-90f5-4dbc-b8a9-aaf205c551ba',
		title: 'JavaScript',
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                    has been the industry's standard dummy text ever since the 1500s, when an unknown 
                    printer took a galley of type and scrambled it to make a type specimen book. It has survived 
                    not only five centuries, but also the leap into electronic typesetting, remaining essentially u
                    nchanged.`,
		creationDate: '08/03/2021',
		duration: 160,
		authors: [
			'27cc3006-e93a-4748-8ca8-73d06aa93b6d',
			'f762978b-61eb-4096-812b-ebde22838167',
		],
	},
	{
		id: 'b5630fdd-7bf7-4d39-b75a-2b5906fd0916',
		title: 'Angular',
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                    has been the industry's standard dummy text ever since the 1500s, when an unknown 
                    printer took a galley of type and scrambled it to make a type specimen book.`,
		creationDate: '10/11/2020',
		duration: 210,
		authors: [
			'df32994e-b23d-497c-9e4d-84e4dc02882f',
			'095a1817-d45b-4ed7-9cf7-b2417bcbf748',
		],
	},
];
export const addToCourse = (item) => {
	mockedCoursesList.push(item);
};
export const addtoAuthors = (item) => {
	mockedAuthorsList.push(item);
};

export const mockedAuthorsList = [
	{
		id: '27cc3006-e93a-4748-8ca8-73d06aa93b6d',
		name: 'Vasiliy Dobkin',
	},
	{
		id: 'f762978b-61eb-4096-812b-ebde22838167',
		name: 'Nicolas Kim',
	},
	{
		id: 'df32994e-b23d-497c-9e4d-84e4dc02882f',
		name: 'Anna Sidorenko',
	},
	{
		id: '095a1817-d45b-4ed7-9cf7-b2417bcbf748',
		name: 'Valentina Larina',
	},
];

export const mockedState = {
	user: {
		isAuth: true,
		name: 'Test Name',
		token: 'lkdjvnk',
		role: 'admin',
		email: 'test@email.com',
		password: 'test123',
	},
	course: [
		{
			title: 'Ttitle',
			description: 'Tdescription',
			creationDate: '9/3/2021',
			duration: 89,
			authors: [
				'9b87e8b8-6ba5-40fc-a439-c4e30a373d36',
				'1c972c52-3198-4098-b6f7-799b45903199',
			],
			id: '66cc289e-6de9-49b2-9ca7-8b4f409d6467',
		},
	],
	author: [
		{ name: 'author', id: '9b87e8b8-6ba5-40fc-a439-c4e30a373d36' },
		{ name: 'author2', id: '1c972c52-3198-4098-b6f7-799b45903199' },
		{ name: 'author3', id: '072fe3fc-e751-4745-9af5-aa9eed0ea9ed' },
		{ name: 'author4', id: '40b21bd5-cbae-4f33-b154-0252b1ae03a9' },
		{ name: 'author5', id: '5e0b0f18-32c9-4933-b142-50459b47f09e' },
		{ name: 'author6', id: '9987de6a-b475-484a-b885-622b8fb88bda' },
		{ name: 'Sharguru', id: '23adc1df-8edc-4825-ab3a-2ffabf468806' },
		{ name: 'lfjk', id: '8d64e193-b8e1-48d2-af3d-c87425343cc9' },
	],
};

const localStorageMock = (function () {
	let store = mockedState.user;

	return {
		getItem: function (key) {
			return store[key] || null;
		},
		setItem: function (key, value) {
			store[key] = value.toString();
		},
		removeItem: function (key) {
			delete store[key];
		},
		clear: function () {
			store = {};
		},
	};
})();
Object.defineProperty(window, 'localStorage', {
	value: localStorageMock,
});
