import { useAuthenticatedUserStore } from '@/store/useAuthenticatedUserStore';
import localStorageUtils from '@/utils/localStorage';

import { useAuthSignInUserMutation } from '../services/react-query/useAuthSignInUserMutation';
import { AuthSignInPayload } from '../types/auth.types';

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
