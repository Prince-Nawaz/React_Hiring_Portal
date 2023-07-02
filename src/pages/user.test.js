import React from 'react';
import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { routerConfig } from '../App';
import { Provider } from 'react-redux';
import store from '../store/store';
import UserPage from './User';

jest.mock('./User', () => () => (
    <div data-testid='user'>
        <div data-testid='user-profile'></div>
        <div data-testid='user-detail'></div>
    </div>
));

test('renders the App component for user profile route', () => {
    const router = createMemoryRouter(routerConfig, {
        initialEntries: ['/user-profile'],
    });

    render(
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    );

    const userElement = screen.getByTestId('user-profile');
    expect(userElement).toBeInTheDocument();
});

test('renders the Home Page with Welcome component', () => {
    render(<UserPage />);
    const userElement = screen.getByTestId('user-detail');
    expect(userElement).toBeInTheDocument();
});
