import * as React from 'react';

import { RouteObject } from 'react-router-dom';

import { RouteErrorElement } from '@/components/app';
import PrivateLayout from '@/layouts/PrivateLayout/PrivateLayout';

import { appRoutesNavigation } from './app.routes';
import routePaths from './routePaths';
import routesNavigationToConfig from './routesNavigationToConfig';

const SignIn = React.lazy(() => import('@/pages/SignIn'));
const SignUp = React.lazy(() => import('@/pages/SignUp'));

export const routes: RouteObject[] = [
	{
		errorElement: <RouteErrorElement />,
		id: 'ROOT',
		path: routePaths.ROOT,
		element: <PrivateLayout />,
		children: routesNavigationToConfig(appRoutesNavigation),
	},
	{
		errorElement: <RouteErrorElement />,
		id: 'ROOT_SIGN_IN',
		path: routePaths.ROOT_SIGN_IN,
		element: <SignIn />,
	},
	{
		errorElement: <RouteErrorElement />,
		id: 'ROOT_SIGN_UP',
		path: routePaths.ROOT_SIGN_UP,
		element: <SignUp />,
	},
];

export default routes;
