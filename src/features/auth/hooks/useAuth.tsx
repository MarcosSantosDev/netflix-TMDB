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
			authenticatedUserStore.setLoggedUser({ userId: response.data.user.id });
			localStorageUtils.setAccessToken(response.data.access_token);
		} catch {
			authenticatedUserStore.resetLoggedUser();
			localStorageUtils.resetAccessToken();
		}
	};

	const logout = () => {
		queryClient.removeQueries({ queryKey: [GET_USER_BY_ID_QUERY_KEY] });
		authenticatedUserStore.resetSelectedProfile();
		authenticatedUserStore.resetLoggedUser();
		localStorageUtils.resetAccessToken();
	};

	return {
		...authenticatedUserStore,
		isLoadingSignIn: authSignInUserMutation.isPending,
		signIn,
		logout,
	};
};
