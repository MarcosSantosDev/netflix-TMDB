import { useMutation } from '@tanstack/react-query';

import profileService from '@/features/profile/services/profile.services';

const UPDATE_PROFILE_MUTATION_KEY = 'authSignInUserMutation';

export type USE_UPDATE_PROFILE_MUTATION_KEY = [typeof UPDATE_PROFILE_MUTATION_KEY];

export const useUpdateProfileMutation = () => {
	return useMutation({
		mutationKey: [UPDATE_PROFILE_MUTATION_KEY] as USE_UPDATE_PROFILE_MUTATION_KEY,
		mutationFn: profileService.updateProfileById,
	});
};
