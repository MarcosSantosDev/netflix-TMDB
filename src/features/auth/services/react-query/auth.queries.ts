import { queryOptions, useQuery } from '@tanstack/react-query';

import type { AuthUserReturn } from '../../types/auth.types';
import authService from '../auth.services';
import { AUTH_USER_QUERY_KEY } from './auth.queryKeys';

const initialData: AuthUserReturn = {
	displayName: '',
	email: '',
};

export const useAuthUserQuery = () => {
	return useQuery(
		queryOptions({
			queryKey: [AUTH_USER_QUERY_KEY],
			queryFn: authService.authUser,
			staleTime: Infinity,
			enabled: false,
			initialData,
		})
	);
};
