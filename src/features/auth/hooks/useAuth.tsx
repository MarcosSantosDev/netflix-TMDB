import * as React from 'react';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import localStorageUtils from '@/utils/localStorage';

import { useAuthSignInUserMutation } from '../services/react-query/auth.mutations';
import { AuthSignInPayload, AuthUser } from '../types/auth.types';

type AuthUserState = AuthUser | null;

type StateData = {
	user: AuthUserState;
	isAuthenticated: boolean;
	isLoading: boolean;
};

type UseAuthStore = {
	user: AuthUserState;
	isAuthenticated: boolean;
	setLoggedUser: (data: { user: AuthUserState }) => void;
	resetLoggedUser: () => void;
};

const useAuthStore = create(
	persist<UseAuthStore>(
		(set) => {
			const initialState: StateData = {
				user: null,
				isAuthenticated: false,
				isLoading: true,
			};

			return {
				...initialState,
				setLoggedUser: (data) =>
					set({
						user: data.user,
						isAuthenticated: true,
					}),
				resetLoggedUser: () =>
					set({
						user: null,
						isAuthenticated: false,
					}),
			};
		},
		{
			name: '@playground:auth-store',
		}
	)
);

export const useAuth = () => {
	const [isLoading, setIsLoading] = React.useState(false);

	const { setLoggedUser, resetLoggedUser, ...stateAuthStore } = useAuthStore();
	const authSignInUserMutation = useAuthSignInUserMutation();

	const signIn = async (credentials: AuthSignInPayload) => {
		setIsLoading(true);
		try {
			const response = await authSignInUserMutation.mutateAsync(credentials);
			localStorageUtils.setAccessToken(response.access_token);
			setLoggedUser({ user: response.user });
		} catch {
			localStorageUtils.resetAccessToken();
			resetLoggedUser();
		} finally {
			setIsLoading(false);
		}
	};

	const logout = () => {
		resetLoggedUser();
	};

	return {
		...stateAuthStore,
		isLoading,
		signIn,
		logout,
	};
};
