import React from 'react';
import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { routerConfig } from '../App';
import { Provider } from 'react-redux';
import store from '../store/store';

jest.mock('./AppliedJobs', () => () => <div data-testid='applied-jobs'></div>);

test('renders the App component for main route', () => {
    const router = createMemoryRouter(routerConfig, {
        initialEntries: ['/jobs/applied-jobs'],
    });

    render(
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    );

    const layoutElement = screen.getByTestId('applied-jobs');
    expect(layoutElement).toBeInTheDocument();
});
