import { queryOptions, useQuery } from '@tanstack/react-query';

import userService from '@/services/user.services';
import { useAuthenticatedUserStore } from '@/store/useAuthenticatedUserStore';

export const GET_USER_BY_ID_QUERY_KEY = 'getUserById';

export type UseGetUserByIdQueryKey = [typeof GET_USER_BY_ID_QUERY_KEY, id: string];

type UseGetUserByIdQueryParams = {
	autoRefetch: boolean;
};

export const useGetUserByIdQuery = ({ autoRefetch }: UseGetUserByIdQueryParams) => {
	const { userId } = useAuthenticatedUserStore();

	return useQuery(
		queryOptions({
			queryKey: [GET_USER_BY_ID_QUERY_KEY, userId],
			queryFn: () => userService.getUserById(userId),
			select: (data) => {
				return data.data;
			},
			staleTime: Infinity,
			enabled: !!autoRefetch,
		})
	);
};
