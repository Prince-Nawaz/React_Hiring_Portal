import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './Home';

jest.mock('../components//Welcome', () => () => <div data-testid='welcome' />);
test('renders the Home Page with Welcome component', () => {
    render(<HomePage />);
    const WelcomeElement = screen.getByTestId('welcome');
    expect(WelcomeElement).toBeInTheDocument();
});
