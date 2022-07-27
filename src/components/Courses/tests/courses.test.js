import '@testing-library/jest-dom';
import { fireEvent, waitFor } from '@testing-library/react';
import { mockedState } from '../../../mockedContantsForTest';
import { renderWithProviders } from '../../../testUtil';
import Courses from '../Courses';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockedUsedNavigate,
}));

const renderComponent = () => {
	return renderWithProviders(<Courses />);
};

describe('<Courses/> component test', () => {
	test('courseCard equal to courses array length', () => {
		const { getAllByTestId } = renderComponent();
		let courseComp = getAllByTestId('courseCard');
		expect(courseComp.length).toBe(mockedState.course.length);
	});

	test('courseForm after button click', async () => {
		const { getByTestId } = renderComponent();
		const buttonElement = getByTestId('buttonForTesting');
		await waitFor(() =>
			expect(getByTestId('buttonForTesting')).toBeInTheDocument()
		);
		fireEvent.click(buttonElement);
		expect(mockedUsedNavigate).toBeCalledTimes(1);
	});
});
