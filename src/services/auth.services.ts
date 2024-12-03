import { apiClient } from '@/libs/axios';
import type { AuthSignInPayload, AuthSignInReturn } from '@/services/@types/auth.types';

const authService = {
	authSingIn: async (data: AuthSignInPayload) => {
		const response = await apiClient.post<AuthSignInReturn>('/auth/sign-in', data);
		return response.data;
	},
};

export default authService;
