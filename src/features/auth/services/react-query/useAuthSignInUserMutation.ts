import { useMutation } from '@tanstack/react-query';

import { SuccessResponse } from '@/@types/http.types';
import { ReadUser } from '@/@types/user.types';
import { queryClient } from '@/libs/react-query';
import { GET_USER_BY_ID_QUERY_KEY, UseGetUserByIdQueryKey } from '@/services/react-query/useGetUserByIdQuery';

import authService from '../auth.services';

const AUTH_SIGNIN_USER_MUTATION_KEY = 'authSignInUserMutation';

export type USE_AUTH_SIGNIN_USER_MUTATION_KEY = [typeof AUTH_SIGNIN_USER_MUTATION_KEY];

export const useAuthSignInUserMutation = () => {
	return useMutation({
		mutationKey: [AUTH_SIGNIN_USER_MUTATION_KEY],
		mutationFn: authService.authSingIn,
		onSuccess: (result) => {
			const userData = result.data.user;
			const GET_USER_BY_ID_KEY: UseGetUserByIdQueryKey = [GET_USER_BY_ID_QUERY_KEY, userData.id];
			queryClient.setQueryData(GET_USER_BY_ID_KEY, (): SuccessResponse<ReadUser> => ({ data: userData, status: 200 }));
		},
	});
};
