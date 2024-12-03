import { queryOptions, useQuery } from '@tanstack/react-query';

import { useAuthenticatedUserStore } from '@/store/useAuthenticatedUserStore';

import userService from '../user.services';

export const GET_USER_BY_ID_QUERY_KEY = 'getUserById';

export type UseGetUserByIdQueryKey = [typeof GET_USER_BY_ID_QUERY_KEY, id: string];

export const useGetUserByIdQuery = () => {
	const { userId } = useAuthenticatedUserStore();

	return useQuery(
		queryOptions({
			queryKey: [GET_USER_BY_ID_QUERY_KEY, userId],
			queryFn: () => userService.getUserById(userId),
			select: (data) => {
				return data.data;
			},
			staleTime: Infinity,
			enabled: true,
		})
	);
};