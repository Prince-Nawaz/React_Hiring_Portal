import React from 'react';
import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store/store';
import { routerConfig } from '../App';

test('renders the user Profile component if accessed by freelancer', () => {
    const router = createMemoryRouter(routerConfig, {
        initialEntries: ['/user-profile'],
    });

    render(
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    );
    const userDetailElement = screen.getByText('My Profile');
    expect(userDetailElement).toBeInTheDocument();
});

test('renders the user-detail component if access by employer', () => {
    const router = createMemoryRouter(routerConfig, {
        initialEntries: [
            '/jobs/05fdada8-8286-4271-b0b1-7c05f45e6ad0/user-detail',
        ],
    });

    render(
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    );
    const userDetailElement = screen.getByText(/Applicants Detail/, {
        exact: false,
    });
    expect(userDetailElement).toBeInTheDocument();
});
