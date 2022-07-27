import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import { setupStore } from './store/index';
import { mockedState } from './constants';
import { BrowserRouter, Routes } from 'react-router-dom';

export function renderWithProviders(
	ui,
	{
		// preloadedState = {},
		preloadedState = mockedState,
		// Automatically create a store instance if no store was passed in
		store = setupStore(preloadedState),
		...renderOptions
	} = {}
) {
	function Wrapper({ children }) {
		return (
			<Provider store={store}>
				<BrowserRouter>{children}</BrowserRouter>
			</Provider>
		);
	}
	return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
