import { mockedState } from '../../mockedContantsForTest';
import { addNewCourseAction } from '../courses/actions';
import { courseReducer } from '../courses/reducer';

const mockedData = {
	title: 'Ttitle',
	description: 'Tdescription',
	creationDate: '9/3/2021',
	duration: 89,
	authors: [
		'9b87e8b8-6ba5-40fc-a439-c4e30a373d36',
		'1c972c52-3198-4098-b6f7-799b45903199',
	],
	id: '66cc289e-6de9-49b2-9ca7-8b4f409d6467',
};
describe('Course Reducer Tests', () => {
	test('reducer returning intial state', () => {
		expect(courseReducer(undefined, {})).toEqual([]);
	});

	test('do Save_course and return new state', () => {
		const previousState = [];
		expect(
			courseReducer(previousState, addNewCourseAction([mockedData]))
		).toEqual(mockedState.course);
	});
});
