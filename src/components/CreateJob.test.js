import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import CreateJob from './CreateJob';

const store = createStore(() => ({}));

test('renders the CreateJob component', () => {
    const mockDispatch = jest.fn();

    jest.mock('react-redux', () => ({
        ...jest.requireActual('react-redux'),
        useDispatch: () => mockDispatch,
    }));
    jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'),
        useNavigate: () => jest.fn(),
    }));

    render(
        <Router>
            <Provider store={store}>
                <CreateJob />
            </Provider>
        </Router>
    );

    const formElement = screen.getByTestId('create-job-form');
    expect(formElement).toBeInTheDocument();

    const companyNameInput = screen.getByLabelText('Company Name');
    const phoneNumberInput = screen.getByLabelText('Phone Number');
    const descriptionInput = screen.getByLabelText('Description');
    const requirementsInput = screen.getByLabelText('Job Requirements');
    const tagsInput = screen.getByTestId('tags');
    const salaryInput = screen.getByLabelText('Salary / Hour');
    expect(companyNameInput).toBeInTheDocument();
    expect(phoneNumberInput).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();
    expect(requirementsInput).toBeInTheDocument();
    expect(tagsInput).toBeInTheDocument();
    expect(salaryInput).toBeInTheDocument();
});
