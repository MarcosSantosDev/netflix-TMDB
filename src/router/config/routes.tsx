import * as React from 'react';

import { RouteObject } from 'react-router-dom';

import { RouteErrorElement } from '@/components/app/RouteErrorElement/RouteErrorElement';
import PrivateLayout from '@/layouts/PrivateLayout';

import routePaths from './routePaths';

const SignIn = React.lazy(() => import('@/pages/SignIn'));
const Profiles = React.lazy(() => import('@/pages/Profiles'));
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
				id: 'PROFILES',
				path: routePaths.PROFILES,
				element: <Profiles />,
			},
			{
				id: 'PROFILE_ID',
				path: routePaths.PROFILE_ID,
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
