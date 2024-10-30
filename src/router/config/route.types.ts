import type { RouteObject } from 'react-router-dom';

import type { IconNames } from '@/components/ui/Icon/Icon';

export type NavigationRouteObject = RouteObject & {
	navigationIcon?: IconNames;
	navigationTitle?: string;
	children?: NavigationRouteObject[];
};
