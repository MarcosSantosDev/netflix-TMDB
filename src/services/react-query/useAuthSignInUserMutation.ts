import { useMutation } from '@tanstack/react-query';

import type { SuccessResponse } from '@/@types/http.types';
import type { ReadUser } from '@/@types/user.types';
import useToast from '@/hooks/useToast';
import { queryClient } from '@/libs/react-query';
import authService from '@/services/auth.services';
import { GET_USER_BY_ID_QUERY_KEY, type UseGetUserByIdQueryKey } from '@/services/react-query/useGetUserByIdQuery';

const AUTH_SIGNIN_USER_MUTATION_KEY = 'authSignInUserMutation';

export type USE_AUTH_SIGNIN_USER_MUTATION_KEY = [typeof AUTH_SIGNIN_USER_MUTATION_KEY];

export const useAuthSignInUserMutation = () => {
	const { showErrorToast } = useToast();

	return useMutation({
		mutationKey: [AUTH_SIGNIN_USER_MUTATION_KEY],
		mutationFn: authService.authSingIn,
		onSuccess: (result) => {
			const userData = result.data.user;
			const GET_USER_BY_ID_KEY: UseGetUserByIdQueryKey = [GET_USER_BY_ID_QUERY_KEY, userData.id];
			queryClient.setQueryData(GET_USER_BY_ID_KEY, (): SuccessResponse<ReadUser> => ({ data: userData, status: 200 }));
		},
		onError() {
			showErrorToast('Ocorreu um erro, e não foi possivel autenticar o usuário');
		},
	});
};
