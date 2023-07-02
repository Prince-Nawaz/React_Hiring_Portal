import React from 'react';
import { render, screen } from '@testing-library/react';
import AppliedJobsPage from '../pages/AppliedJobs';

jest.mock('../components/JobsAppliedList', () => () => (
    <div data-testid='jobs-applied-list' />
));
test('renders the AppliedJobsPage component and test for applied jobs component', () => {
    render(<AppliedJobsPage />);
    const jobsAppliedListElement = screen.getByTestId('jobs-applied-list');
    expect(jobsAppliedListElement).toBeInTheDocument();
});
