import { RouteObject } from 'react-router-dom';

import { NavigationRouteObject } from './route.types';

const routesNavigationToConfig = (routes: NavigationRouteObject[]): RouteObject[] => {
	return routes.map(({ id, index, path, element }) => ({
		id,
		index,
		path,
		element,
	}));
};

export default routesNavigationToConfig;
