import { useQuery } from '@tanstack/react-query';

import tmdbService from '@/features/home/services/tmdb.services';
import { useAuthenticatedUserStore } from '@/store/useAuthenticatedUserStore';

export const GET_MOVIE_LIST_TOP_RATED_QUERY_KEY = 'getMovieListTopRated';

export type UseGetMovieListTopRatedQueryKey = [typeof GET_MOVIE_LIST_TOP_RATED_QUERY_KEY];

export const useGetMovieListTopRatedQuery = () => {
	const { isAuthenticated } = useAuthenticatedUserStore();

	return useQuery({
		queryKey: [GET_MOVIE_LIST_TOP_RATED_QUERY_KEY] as UseGetMovieListTopRatedQueryKey,
		queryFn: tmdbService.getMovieListTopRated,
		staleTime: Number.POSITIVE_INFINITY,
		enabled: isAuthenticated,
	});
};
