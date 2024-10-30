import type { AuthUserReturn, AuthSignInPayload, AuthSignInReturn } from '@/features/auth/types/auth.types';
import { apiClient } from '@/libs/axios';

const authService = {
	authUser: async () => {
		const response = await apiClient.get<AuthUserReturn>('/auth/user');
		return response.data;
	},
	authSingIn: async (data: AuthSignInPayload) => {
		const response = await apiClient.post<AuthSignInReturn>('/auth/sign-in', data);
		return response.data;
	},
};

export default authService;
