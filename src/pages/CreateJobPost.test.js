import React from 'react';
import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { routerConfig } from '../App';
import { Provider } from 'react-redux';
import store from '../store/store';

jest.mock('./CreateJobPost', () => () => (
    <div data-testid='create-new-job'></div>
));

test('renders the App component for main route', () => {
    const router = createMemoryRouter(routerConfig, {
        initialEntries: ['/jobs/create-new'],
    });

    render(
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    );

    const layoutElement = screen.getByTestId('create-new-job');
    expect(layoutElement).toBeInTheDocument();
});
