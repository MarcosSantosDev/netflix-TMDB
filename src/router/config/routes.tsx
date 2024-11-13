import * as React from 'react';

import { RouteObject } from 'react-router-dom';

import { RouteErrorElement } from '@/components/app';
import PrivateLayout from '@/layouts/PrivateLayout/PrivateLayout';

import routePaths from './routePaths';

const SignIn = React.lazy(() => import('@/pages/SignIn'));
const Profile = React.lazy(() => import('@/pages/Profile'));
const Home = React.lazy(() => import('@/pages/Home'));

export const routes: RouteObject[] = [
	{
		errorElement: <RouteErrorElement />,
		id: 'ROOT',
		path: routePaths.ROOT,
		element: <PrivateLayout />,
		children: [
			{
				id: 'PROFILE',
				path: routePaths.PROFILE,
				element: <Profile />,
			},
			{
				id: 'HOME',
				path: routePaths.HOME,
				element: <Home />,
			},
		],
	},
	{
		errorElement: <RouteErrorElement />,
		id: 'SIGN_IN',
		path: routePaths.SIGN_IN,
		element: <SignIn />,
	},
];

export default routes;
