import { useMutation } from '@tanstack/react-query';

import { SuccessResponse } from '@/@types/http.types';
import { ReadUser } from '@/@types/user.types';
import profileService from '@/features/profile/services/profile.services';
import { queryClient } from '@/libs/react-query';

import { GET_PROFILE_BY_ID_QUERY_KEY } from './useGetProfileByIdQuery';

const CREATE_PROFILE_MUTATION_KEY = 'authSignInUserMutation';

export type USE_CREATE_PROFILE_MUTATION_KEY = [typeof CREATE_PROFILE_MUTATION_KEY];

export const useCreateProfileMutation = () => {
	return useMutation({
		mutationKey: [CREATE_PROFILE_MUTATION_KEY] as USE_CREATE_PROFILE_MUTATION_KEY,
		mutationFn: profileService.createProfile,
		onSuccess: (result) => {
			const profile = result.data;

			queryClient.setQueryData(
				[GET_PROFILE_BY_ID_QUERY_KEY, profile.id],
				(): SuccessResponse<ReadUser> => ({ data: profile, status: 200 })
			);
		},
	});
};
