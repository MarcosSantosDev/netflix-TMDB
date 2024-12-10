import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { BROWSER_STORE_APP } from '@/constants/localStore';

type StateData = {
	userId: string;
	isAuthenticated: boolean;
	selectedProfileId: string;
};

type UseAuthenticatedUserStore = {
	userId: string;
	isAuthenticated: boolean;
	setLoggedUser: (data: { userId: string }) => void;
	resetLoggedUser: () => void;
	selectedProfileId: string;
	setSelectedProfile: (data: { profileId: string }) => void;
	resetSelectedProfile: () => void;
};

export const useAuthenticatedUserStore = create(
	persist<UseAuthenticatedUserStore>(
		(set) => {
			const initialState: StateData = {
				userId: '',
				isAuthenticated: false,
				selectedProfileId: '',
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
				setSelectedProfile: (data) =>
					set({
						selectedProfileId: data.profileId,
					}),
				resetSelectedProfile: () =>
					set({
						selectedProfileId: '',
					}),
			};
		},
		{
			name: BROWSER_STORE_APP,
		}
	)
);
