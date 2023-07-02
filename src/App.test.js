import React from 'react';
import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import App, { routerConfig } from './App';
import Layout from './pages/Layout';
import HomePage from './pages/Home';
import AuthenticationPage from './pages/Authenticate';
import UserPage from './pages/User';
import JobsPage from './pages/Jobs';
import CreateJobPostPage from './pages/CreateJobPost';
import AppliedJobsPage from './pages/AppliedJobs';

jest.mock('./pages/Layout', () => () => (
    <>
        <div data-testid='layout' />
        <div data-testid='home' />
        <div data-testid='auth' />
        <div data-testid='user-profile' />
        <div data-testid='jobs' />
        <div data-testid='create-new-job' />
        <div data-testid='applied-jobs' />
        <div data-testid='user-detail' />
    </>
));
jest.mock('./pages/Jobs', () => () => <div data-testid='jobs' />);
jest.mock('./pages/Authenticate', () => () => <div data-testid='auth' />);
jest.mock('./pages/Home', () => () => <div data-testid='home' />);
jest.mock('./pages/CreateJobPost', () => () => (
    <div data-testid='create-job-post' />
));
jest.mock('./pages/AppliedJobs', () => () => (
    <div data-testid='applied-jobs' />
));
jest.mock('./pages/User', () => () => <div data-testid='user' />);

test('renders the App component for main route', () => {
    const router = createMemoryRouter(routerConfig, {
        initialEntries: ['/'],
    });
    render(<RouterProvider router={router} />);

    const layoutElement = screen.getByTestId('layout');
    expect(layoutElement).toBeInTheDocument();
});

test('renders the App component for Home route', () => {
    const router = createMemoryRouter(routerConfig, {
        initialEntries: ['/'],
    });
    render(<RouterProvider router={router} />);

    const homeElement = screen.getByTestId('home');
    expect(homeElement).toBeInTheDocument();
});

test('renders the App component for auth route', () => {
    const router = createMemoryRouter(routerConfig, {
        initialEntries: ['/auth'],
    });
    render(<RouterProvider router={router} />);

    const authElement = screen.getByTestId('auth');
    expect(authElement).toBeInTheDocument();
});

test('renders the App component for userProfile route', () => {
    const router = createMemoryRouter(routerConfig, {
        initialEntries: ['/user-profile'],
    });
    render(<RouterProvider router={router} />);

    const userProfileElement = screen.getByTestId('user-profile');
    expect(userProfileElement).toBeInTheDocument();
});

test('renders the App component for jobs route', () => {
    const router = createMemoryRouter(routerConfig, {
        initialEntries: ['/jobs'],
    });
    render(<RouterProvider router={router} />);

    const jobsElement = screen.getByTestId('jobs');
    expect(jobsElement).toBeInTheDocument();
});

test('renders the App component for create new job route', () => {
    const router = createMemoryRouter(routerConfig, {
        initialEntries: ['/jobs/create-new'],
    });
    render(<RouterProvider router={router} />);

    const createJobElement = screen.getByTestId('create-new-job');
    expect(createJobElement).toBeInTheDocument();
});

test('renders the App component for applied jobs route', () => {
    const router = createMemoryRouter(routerConfig, {
        initialEntries: ['/jobs/applied-jobs'],
    });
    render(<RouterProvider router={router} />);

    const appliedJobsElement = screen.getByTestId('applied-jobs');
    expect(appliedJobsElement).toBeInTheDocument();
});

test('renders the App component for user detail route', () => {
    const router = createMemoryRouter(routerConfig, {
        initialEntries: ['/jobs/1/user-detail'],
    });
    render(<RouterProvider router={router} />);

    const userDetailElement = screen.getByTestId('user-detail');
    expect(userDetailElement).toBeInTheDocument();
});
