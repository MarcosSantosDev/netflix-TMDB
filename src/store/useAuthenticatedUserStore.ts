import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type StateData = {
	userId: string;
	isAuthenticated: boolean;
};

type UseAuthenticatedUserStore = {
	userId: string;
	isAuthenticated: boolean;
	setLoggedUser: (data: { userId: string }) => void;
	resetLoggedUser: () => void;
};

export const useAuthenticatedUserStore = create(
	persist<UseAuthenticatedUserStore>(
		(set) => {
			const initialState: StateData = {
				userId: '',
				isAuthenticated: false,
			};

			return {
				...initialState,
				setLoggedUser: (data) =>
					set({
						userId: data.userId,
						isAuthenticated: true,
					}),
				resetLoggedUser: () =>
					set({
						userId: '',
						isAuthenticated: false,
					}),
			};
		},
		{
			name: '@playground:auth-store',
		}
	)
);
