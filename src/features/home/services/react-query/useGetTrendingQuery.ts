import { queryOptions, useQuery } from '@tanstack/react-query';

import { useAuthenticatedUserStore } from '@/store/useAuthenticatedUserStore';

import homeService from '../home.services';

export const GET_TRENDING_QUERY_KEY = 'getTrending';

export type UseGetTrendingQueryKey = [typeof GET_TRENDING_QUERY_KEY, id: string];

export const useGetTrendingQuery = () => {
	const { isAuthenticated } = useAuthenticatedUserStore();

	return useQuery(
		queryOptions({
			queryKey: [GET_TRENDING_QUERY_KEY],
			queryFn: homeService.getTrending,
			staleTime: Infinity,
			enabled: isAuthenticated,
		})
	);
};
