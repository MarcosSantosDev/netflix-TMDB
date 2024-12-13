import { useQuery } from '@tanstack/react-query';

import tmdbService from '@/features/home/services/tmdb.services';
import { useAuthenticatedUserStore } from '@/store/useAuthenticatedUserStore';

export const GET_TRENDING_QUERY_KEY = 'getTrending';

export type UseGetTrendingQueryKey = [typeof GET_TRENDING_QUERY_KEY];

export const useGetTrendingQuery = () => {
	const { isAuthenticated } = useAuthenticatedUserStore();

	return useQuery({
		queryKey: [GET_TRENDING_QUERY_KEY] as UseGetTrendingQueryKey,
		queryFn: tmdbService.getTrending,
		staleTime: Infinity,
		enabled: isAuthenticated,
	});
};
