import '@testing-library/jest-dom';
import {
	screen,
	fireEvent,
	cleanup,
	userEvent,
	waitFor,
} from '@testing-library/react';
import Button from '../../../common/Button/Button';
import { mockedState } from '../../../constants';
import { renderWithProviders } from '../../../testUtil';
import CourseCard from '../components/CourseCard/CourseCard';
import Courses from '../Courses';
import { createMemoryHistory } from 'history';
import { Navigate, useNavigate } from 'react-router-dom';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockedUsedNavigate,
}));

const renderComponent = () => {
	return renderWithProviders(<Courses />);
};

describe('courses test', () => {
	test('courseCard equal to courses array length', () => {
		const { getAllByTestId } = renderComponent();
		let courseComp = getAllByTestId('courseCard');
		expect(courseComp.length).toBe(mockedState.course.length);
	});

	test('courseForm after button click', async () => {
		const { getByText, getByRole, getByTestId } = renderComponent();
		const buttonElement = getByTestId('buttonForTesting');
		await waitFor(() =>
			expect(getByTestId('buttonForTesting')).toBeInTheDocument()
		);
		fireEvent.click(buttonElement);
		expect(mockedUsedNavigate).toBeCalledTimes(2);
		// expect(screen.getByTestId('courseFormAuthor')).toBeInTheDocument();
		// buttonElement.click();
		// expect(mockOnClick).toHaveBeenCalledTimes(1);
		// expect(mockOnClick.mock.calls.length).toEqual(1);

		// expect(fireEvent.click(buttonElement)).toEqual(mockOnClick);
		// expect(history.location).toContain('/course/add');
	});
});
