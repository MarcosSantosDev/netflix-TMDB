import * as React from 'react';

import { RouteObject } from 'react-router-dom';

import { RouteErrorElement } from '@/components/app';
import PrivateLayout from '@/layouts/PrivateLayout/PrivateLayout';

import routePaths from './routePaths';

const SignIn = React.lazy(() => import('@/pages/SignIn'));

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
				element: <div>PROFILE</div>,
			},
			{
				id: 'HOME',
				path: routePaths.HOME,
				element: <div>HOME</div>,
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
