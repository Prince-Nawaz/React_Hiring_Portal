import React from 'react';
import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { routerConfig } from '../App';
import { Provider } from 'react-redux';
import store from '../store/store';
import JobsPage from './Jobs';

jest.mock('./Jobs', () => () => (
    <div data-testid='jobs'>
        <div data-testid='job-listings'></div>
    </div>
));

test('renders the App component for jobs route and loads jobs page', () => {
    const router = createMemoryRouter(routerConfig, {
        initialEntries: ['/jobs'],
    });

    render(
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    );

    const layoutElement = screen.getByTestId('jobs');
    expect(layoutElement).toBeInTheDocument();
});

test('renders the Home Page with Welcome component', () => {
    render(<JobsPage />);
    const JobListingsElement = screen.getByTestId('job-listings');
    expect(JobListingsElement).toBeInTheDocument();
});
