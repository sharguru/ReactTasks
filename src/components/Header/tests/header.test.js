import React from 'react';
import '@testing-library/jest-dom';
import Header from '../Header';
import { mockedState } from '../../../mockedContantsForTest';
import { renderWithProviders } from '../../../testUtil';

const renderComponent = () => renderWithProviders(<Header />);

describe('<Header/> component test cases', () => {
	test('userName display', () => {
		const { getByTestId } = renderComponent();
		let userName = getByTestId('userName').innerHTML;
		expect(userName).toBe(mockedState.user.name);
	});

	test('logo displayed', () => {
		const { getByAltText } = renderComponent();
		expect(getByAltText('logoDes')).toBeInTheDocument();
	});
});
