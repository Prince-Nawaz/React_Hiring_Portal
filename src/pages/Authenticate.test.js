import React from 'react';
import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { routerConfig } from '../App';
import { Provider } from 'react-redux';
import store from '../store/store';
import JobsPage from './Jobs';
import AuthenticationPage from './Authenticate';

jest.mock('./Authenticate', () => () => (
    <div data-testid='auth'>
        <div data-testid='auth-form'></div>
    </div>
));

test('renders the Auth Page component for auth route', () => {
    const router = createMemoryRouter(routerConfig, {
        initialEntries: ['/auth'],
    });

    render(
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    );

    const layoutElement = screen.getByTestId('auth');
    expect(layoutElement).toBeInTheDocument();
});

test('renders the Auth Page with AuthForm component', () => {
    render(<AuthenticationPage />);
    const authFormElement = screen.getByTestId('auth-form');
    expect(authFormElement).toBeInTheDocument();
});
