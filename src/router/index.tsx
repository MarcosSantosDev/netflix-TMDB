import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Loading from '@/components/app/Loading/Loading';
import withAppProviders from '@/HOC/withAppProviders';

import routes from './config/routes';

const router = createBrowserRouter(routes);

const Router = () => {
	return (
		<RouterProvider
			router={router}
			fallbackElement={<Loading />}
		/>
	);
};

export default withAppProviders(Router);
