import { useMutation } from '@tanstack/react-query';

import profileService from '@/features/profile/services/profile.services';

const DELETE_PROFILE_MUTATION_KEY = 'authSignInUserMutation';

export type USE_DELETE_PROFILE_MUTATION_KEY = [typeof DELETE_PROFILE_MUTATION_KEY];

export const useDeleteProfileMutation = () => {
	return useMutation({
		mutationKey: [DELETE_PROFILE_MUTATION_KEY] as USE_DELETE_PROFILE_MUTATION_KEY,
		mutationFn: profileService.deleteProfileById,
	});
};
