import { queryClient } from '@/libs/react-query';
import { AuthSignInPayload } from '@/services/@types/auth.types';
import { useAuthSignInUserMutation } from '@/services/react-query/useAuthSignInUserMutation';
import { GET_USER_BY_ID_QUERY_KEY } from '@/services/react-query/useGetUserByIdQuery';
import { useAuthenticatedUserStore } from '@/store/useAuthenticatedUserStore';
import localStorageUtils from '@/utils/localStorage';

export const useAuth = () => {
	const authenticatedUserStore = useAuthenticatedUserStore();
	const authSignInUserMutation = useAuthSignInUserMutation();

	const signIn = async (credentials: AuthSignInPayload) => {
		try {
			const response = await authSignInUserMutation.mutateAsync(credentials);

			localStorageUtils.setAccessToken(response.data.access_token);

			authenticatedUserStore.setLoggedUser({ userId: response.data.user.id });
		} catch {
			localStorageUtils.resetAccessToken();

			authenticatedUserStore.resetLoggedUser();
		}
	};

	const logout = () => {
		queryClient.invalidateQueries({ queryKey: [GET_USER_BY_ID_QUERY_KEY] });
		authenticatedUserStore.resetSelectedProfile();
		authenticatedUserStore.resetLoggedUser();
	};

	return {
		...authenticatedUserStore,
		isLoadingSignIn: authSignInUserMutation.isPending,
		signIn,
		logout,
	};
};
