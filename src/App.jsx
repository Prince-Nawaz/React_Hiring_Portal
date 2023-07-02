import {
    RouterProvider,
    createBrowserRouter,
    redirect,
} from 'react-router-dom';
import './App.css';
import Layout from './pages/Layout';
import JobsPage from './pages/Jobs';
import AuthenticationPage from './pages/Authenticate';
import HomePage from './pages/Home';
import CreateJobPostPage from './pages/CreateJobPost';
import AppliedJobsPage from './pages/AppliedJobs';
import UserPage from './pages/User';
import { useSelector } from 'react-redux';
import Error from './pages/Error';

const getChildRoutes = (isLoggedIn, isEmployer) => {
    const freelancerRoutes = [
        {
            index: true,
            element: <JobsPage />,
        },
        {
            path: 'applied-jobs',
            element: <AppliedJobsPage />,
        },
    ];
    const employerRoutes = [
        ...freelancerRoutes,
        {
            path: 'create-new',
            element: <CreateJobPostPage />,
        },
        {
            path: ':companyId/user-detail',
            element: <UserPage />,
        },
    ];
    if (isLoggedIn && !isEmployer) {
        return freelancerRoutes;
    }
    if (isLoggedIn && isEmployer) {
        return employerRoutes;
    }
    return [];
};

export const routerConfig = (isLoggedIn, isEmployer) => [
    {
        path: '',
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'auth',
                element: <AuthenticationPage />,
            },
            {
                path: 'user-profile',
                element: <UserPage />,
            },
            {
                path: 'jobs',
                children: [...getChildRoutes(isLoggedIn, isEmployer)],
            },
        ],
    },
];

const App = () => {
    const authState = useSelector((state) => state.auth);
    const router = createBrowserRouter(
        routerConfig(authState.isLoggedIn, authState.isEmployer)
    );
    return <RouterProvider router={router}></RouterProvider>;
};

export default App;
