import React from 'react';
import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { routerConfig } from '../App';
import { Provider } from 'react-redux';
import store from '../store/store';
import MainNavigation from '../components/MainNavigation';
import Layout from './Layout';

jest.mock('./Layout', () => () => (
    <div data-testid='layout'>
        <div data-testid='main-navigation'></div>
    </div>
));

test('renders the Layout Page for main route', () => {
    const router = createMemoryRouter(routerConfig, {
        initialEntries: ['/'],
    });

    render(
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    );

    const layoutElement = screen.getByTestId('layout');
    expect(layoutElement).toBeInTheDocument();
});

test('renders the Home Page with Welcome component', () => {
    render(<Layout />);
    const navigationElement = screen.getByTestId('main-navigation');
    expect(navigationElement).toBeInTheDocument();
});
