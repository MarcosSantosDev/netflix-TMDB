import { useQuery } from '@tanstack/react-query';

import profileService from '@/features/profile/services/profile.services';

export const GET_PROFILE_BY_ID_QUERY_KEY = 'getProfileById';

export type UseGetProfileByIdQueryKey = [typeof GET_PROFILE_BY_ID_QUERY_KEY, id: string];

export const useGetProfileByIdQuery = (id: string) => {
	return useQuery({
		queryKey: [GET_PROFILE_BY_ID_QUERY_KEY, id] as UseGetProfileByIdQueryKey,
		queryFn: () => profileService.getProfileById(id),
		select: (data) => {
			return data.data;
		},
		staleTime: Number.POSITIVE_INFINITY,
		enabled: id.length > 0 && id !== 'new',
	});
};
