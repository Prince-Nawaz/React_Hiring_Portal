import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { authActions } from '../store/auth-slice';
import AuthForm from './AuthForm';

const store = createStore(() => ({
    auth: {
        isLoggedIn: false,
        isEmployer: false,
        emailId: null,
    },
}));

test('renders the AuthForm component', () => {
    render(
        <Router>
            <Provider store={store}>
                <AuthForm />
            </Provider>
        </Router>
    );

    const formElement = screen.getByTestId('auth-form');
    expect(formElement).toBeInTheDocument();

    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(screen.getByRole('button'));
});
