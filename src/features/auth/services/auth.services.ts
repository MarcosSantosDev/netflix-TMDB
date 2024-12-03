import type { AuthSignInPayload, AuthSignInReturn } from '@/features/auth/services/auth.types';
import { apiClient } from '@/libs/axios';

const authService = {
	authSingIn: async (data: AuthSignInPayload) => {
		const response = await apiClient.post<AuthSignInReturn>('/auth/sign-in', data);
		return response.data;
	},
};

export default authService;
