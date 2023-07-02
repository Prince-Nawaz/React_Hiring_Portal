import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from '../pages/Layout';

jest.mock('../components/MainNavigation', () => () => (
    <div data-testid='main-nav' />
));
test('renders the Main Navigation component', () => {
    render(<Layout />);
    const MainNavElement = screen.getByTestId('main-nav');
    expect(MainNavElement).toBeInTheDocument();
});
