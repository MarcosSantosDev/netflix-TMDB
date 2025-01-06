import { RouterProvider, createBrowserRouter } from 'react-router';

import withAppProviders from '@/HOC/withAppProviders';

import routes from './config/routes';

const router = createBrowserRouter(routes);

const Router = () => {
	return <RouterProvider router={router} />;
};

export default withAppProviders(Router);
