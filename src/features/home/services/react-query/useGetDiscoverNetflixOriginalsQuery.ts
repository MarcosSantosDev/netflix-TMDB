import { useQuery } from '@tanstack/react-query';

import tmdbService from '@/features/home/services/tmdb.services';
import { useAuthenticatedUserStore } from '@/store/useAuthenticatedUserStore';

export const GET_DISCOVER_NETFLIX_ORIGINALS_QUERY_KEY = 'getDiscoverNetflixOriginals';

export type UseGetDiscoverNetflixOriginalsQueryKey = [typeof GET_DISCOVER_NETFLIX_ORIGINALS_QUERY_KEY];

export const useGetDiscoverNetflixOriginalsQuery = () => {
	const { isAuthenticated } = useAuthenticatedUserStore();

	return useQuery({
		queryKey: [GET_DISCOVER_NETFLIX_ORIGINALS_QUERY_KEY] as UseGetDiscoverNetflixOriginalsQueryKey,
		queryFn: tmdbService.getDiscoverNetflixOriginals,
		staleTime: Infinity,
		enabled: isAuthenticated,
	});
};
