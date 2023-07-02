import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import JobListings from './JobListings';

const mockStore = configureStore([]);

const sampleJobs = [
    {
        companyId: '1',
        companyName: 'Example Company 1',
        description: 'Example description 1',
        requirements: 'Example requirements 1',
        tags: ['tag1', 'tag2'],
        salary: '$50',
        phoneNumber: '123-456-7890',
        applied: false,
        applicantDetails: [],
    },
    {
        companyId: '2',
        companyName: 'Example Company 2',
        description: 'Example description 2',
        requirements: 'Example requirements 2',
        tags: ['tag3', 'tag4'],
        salary: '$60',
        phoneNumber: '987-654-3210',
        applied: true,
        applicantDetails: [
            {
                email: 'test@example.com',
                name: 'John Doe',
            },
        ],
    },
];

describe('JobListings Component', () => {
    test('renders without errors', () => {
        const store = mockStore({ jobs: { jobs: sampleJobs }, auth: {} });
        render(
            <Provider store={store}>
                <JobListings />
            </Provider>
        );
    });

    test('renders correct number of job listings', () => {
        const store = mockStore({ jobs: { jobs: sampleJobs }, auth: {} });
        const { getAllByTestId } = render(
            <Provider store={store}>
                <JobListings />
            </Provider>
        );

        const jobListElements = getAllByTestId('job-list-item');
        expect(jobListElements.length).toBe(sampleJobs.length);
    });

    test('displays message when no jobs available', () => {
        const store = mockStore({ jobs: { jobs: [] }, auth: {} });
        const { getByText } = render(
            <Provider store={store}>
                <JobListings />
            </Provider>
        );

        const messageElement = getByText(
            "Looks like there isn't any openings right now. Please try after sometime."
        );
        expect(messageElement).toBeInTheDocument();
    });

    test('displays filtered job listings based on tags', () => {
        const store = mockStore({ jobs: { jobs: sampleJobs }, auth: {} });
        const { getByPlaceholderText, getAllByTestId } = render(
            <Provider store={store}>
                <JobListings />
            </Provider>
        );

        const filterInput = getByPlaceholderText(
            'Ex: Angular, React, $50, $65....'
        );
        fireEvent.change(filterInput, { target: { value: 'React' } });
        fireEvent.keyDown(filterInput, { key: 'Enter', code: 'Enter' });

        const jobListElements = getAllByTestId('job-list');
        expect(jobListElements.length).toBeGreaterThan(0);
    });
});
