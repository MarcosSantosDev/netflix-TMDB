import * as React from 'react';

const ExamplePage1 = React.lazy(() => import('@/pages/ExamplePage1'));
const ExamplePage2 = React.lazy(() => import('@/pages/ExamplePage2'));
const ToDoList = React.lazy(() => import('@/pages/ToDoList'));

import { NavigationRouteObject } from './route.types';
import routePaths from './routePaths';

export const appRoutesNavigation: NavigationRouteObject[] = [
	{
		id: 'ROOT_INDEX',
		index: true,
		path: routePaths.ROOT_INDEX,
		element: <ExamplePage1 />,
		navigationTitle: 'Dashboard',
		navigationIcon: 'layout-dashboard',
	},
	{
		id: 'ROOT_ANALYTICS',
		index: true,
		path: routePaths.ROOT_ANALYTICS,
		element: <ExamplePage2 />,
		navigationTitle: 'Analytics',
		navigationIcon: 'chart-column',
	},
	{
		id: 'ROOT_TO_DO_LIST',
		index: true,
		path: routePaths.ROOT_TO_DO_LIST,
		element: <ToDoList />,
		navigationTitle: 'To-Do List',
		navigationIcon: 'list-todo',
	},
];
