import CourseCard from '../CourseCard';
import '@testing-library/jest-dom';
import { mockedState } from '../../../../../mockedContantsForTest';
import { getCourseDuration } from '../../../../../helpers/getCourseDuration';
import { renderWithProviders } from '../../../../../testUtil';
import { getAuthors } from '../../../../../helpers/getAuthorNames';
import { formatDate } from '../../../../../helpers/formatCreationDate';
const mockedData = {
	title: 'test title',
	description: 'test description',
	duration: '67',
	authors: [
		'9b87e8b8-6ba5-40fc-a439-c4e30a373d36',
		'1c972c52-3198-4098-b6f7-799b45903199',
	],
	creationDate: '9/3/2021',
};

const renderComponent = () => {
	return renderWithProviders(<CourseCard course={mockedData} />);
};
describe('<CourseCard/> component tests', () => {
	test('display title', () => {
		const { getByTestId } = renderComponent();
		const titleElement = getByTestId('title');
		expect(titleElement).toBeDefined();
		expect(titleElement).not.toBeNull();
		expect(titleElement.innerHTML).toEqual('test title');
	});
	test('display description', () => {
		const { getByTestId } = renderComponent();
		let descStr = getByTestId('description');
		expect(descStr).toBeDefined();
		expect(descStr).not.toBeNull();
		expect(descStr.innerHTML).toEqual('test description');
	});
	test('duration in correct format', () => {
		const { getByTestId } = renderComponent();
		let durationStr = getByTestId('duration');
		expect(getCourseDuration(70)).toBe('01:10 hours');
		expect(durationStr).not.toBeNull();
		expect(durationStr.innerHTML).toEqual('Duration: ' + getCourseDuration(67));
	});

	test('author list', () => {
		const { getByTestId } = renderComponent();
		let authorStr = getByTestId('author');
		expect(authorStr).toBeDefined();
		expect(authorStr).not.toBeNull();
		expect(authorStr.innerHTML).toEqual(
			'Authors: ' + getAuthors(mockedData.authors, mockedState.author)
		);
	});

	test('date format', () => {
		const { getByTestId } = renderComponent();
		let dateStr = getByTestId('dateCreated');
		expect(dateStr).toBeDefined();
		expect(dateStr).not.toBeNull();
		expect(dateStr.innerHTML).toEqual(
			'Created: ' + formatDate(mockedData.creationDate)
		);
	});
});
