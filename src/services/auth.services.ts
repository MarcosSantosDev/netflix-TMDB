import type { AuthSignInPayload, AuthSignInReturn } from '@/services/@types/auth.types';
import { appHttpClient } from '@/services/http';

const authService = {
	authSingIn: async (data: AuthSignInPayload) => {
		const response = await appHttpClient.post<AuthSignInReturn>('/auth/sign-in', data);
		return response.data;
	},
};

export default authService;
