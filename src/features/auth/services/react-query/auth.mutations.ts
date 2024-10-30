import { useMutation } from '@tanstack/react-query';

import { queryClient } from '@/libs/react-query';

import { AuthUserReturn } from '../../types/auth.types';
import authService from '../auth.services';
import { AUTH_SIGNIN_USER_MUTATION_KEY, AUTH_USER_QUERY_KEY } from './auth.queryKeys';

export const useAuthSignInUserMutation = () => {
	return useMutation({
		mutationKey: [AUTH_SIGNIN_USER_MUTATION_KEY],
		mutationFn: authService.authSingIn,
		onSuccess: async (newAuthUserData) => {
			// Cancel any outgoing refetches
			// (so they don't overwrite our optimistic update)
			await queryClient.cancelQueries({ queryKey: [AUTH_USER_QUERY_KEY] });

			// Snapshot the previous value
			const previousAuthUser = queryClient.getQueryData([AUTH_USER_QUERY_KEY]);

			// Optimistically update to the new value
			queryClient.setQueryData([AUTH_USER_QUERY_KEY], (oldAuthUserData: AuthUserReturn) => {
				return {
					...oldAuthUserData,
					...newAuthUserData.user,
				};
			});

			// Return a context object with the snapshotted value
			return { previousAuthUser };
		},
	});
};
