import { queryOptions, useQuery } from '@tanstack/react-query';

import { useAuthenticatedUserStore } from '@/store/useAuthenticatedUserStore';

import homeService from '../home.services';

export const GET_DISCOVER_NETFLIX_ORIGINALS_QUERY_KEY = 'getDiscoverNetflixOriginals';

export type UseGetDiscoverNetflixOriginalsQueryKey = [typeof GET_DISCOVER_NETFLIX_ORIGINALS_QUERY_KEY, id: string];

export const useGetDiscoverNetflixOriginalsQuery = () => {
	const { isAuthenticated } = useAuthenticatedUserStore();

	return useQuery(
		queryOptions({
			queryKey: [GET_DISCOVER_NETFLIX_ORIGINALS_QUERY_KEY],
			queryFn: homeService.getDiscoverNetflixOriginals,
			staleTime: Infinity,
			enabled: isAuthenticated,
		})
	);
};
