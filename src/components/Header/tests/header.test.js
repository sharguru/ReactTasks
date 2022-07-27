import React from 'react';
import {
	render,
	cleanup,
	fireEvent,
	screen,
	within,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../Header';
import { mockedState } from '../../../constants';
import { Provider } from 'react-redux';
import logoImage from '../../../../public/images/logo.png';
import { renderWithProviders } from '../../../testUtil';
// import { screen } from '@testing-library/dom';
afterEach(cleanup);
jest.useFakeTimers();
const mockedStore = {
	getState: () => mockedState,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};
const renderComponent = () => renderWithProviders(<Header />);

describe('Header Tests', () => {
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
