import { AuthSignInPayload } from '@/features/auth/services/auth.types';
import { useAuthSignInUserMutation } from '@/features/auth/services/react-query/useAuthSignInUserMutation';
import { useAuthenticatedUserStore } from '@/store/useAuthenticatedUserStore';
import localStorageUtils from '@/utils/localStorage';

export const useAuth = () => {
	const { setLoggedUser, resetLoggedUser, ...stateAuthStore } = useAuthenticatedUserStore();
	const authSignInUserMutation = useAuthSignInUserMutation();

	const signIn = async (credentials: AuthSignInPayload) => {
		try {
			const response = await authSignInUserMutation.mutateAsync(credentials);
			localStorageUtils.setAccessToken(response.data.access_token);
			setLoggedUser({ userId: response.data.user.id });
		} catch {
			localStorageUtils.resetAccessToken();
			resetLoggedUser();
		}
	};

	const logout = () => {
		resetLoggedUser();
	};

	return {
		...stateAuthStore,
		isLoadingSignIn: authSignInUserMutation.isPending,
		signIn,
		logout,
	};
};
