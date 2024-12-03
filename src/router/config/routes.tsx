import * as React from 'react';

import { RouteObject } from 'react-router-dom';

import { RouteErrorElement } from '@/components/app';
import PrivateLayout from '@/layouts/PrivateLayout/PrivateLayout';

import routePaths from './routePaths';

const SignIn = React.lazy(() => import('@/pages/SignIn'));
const Profiles = React.lazy(() => import('@/pages/Profiles'));
const Home = React.lazy(() => import('@/pages/Home'));

export const routes: RouteObject[] = [
	{
		errorElement: <RouteErrorElement />,
		id: 'ROOT',
		path: routePaths.ROOT,
		element: <PrivateLayout />,
		children: [
			{
				id: 'PROFILES',
				path: routePaths.PROFILES,
				element: <Profiles />,
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
