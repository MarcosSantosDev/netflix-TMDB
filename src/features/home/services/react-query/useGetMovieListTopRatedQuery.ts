import { queryOptions, useQuery } from '@tanstack/react-query';

import { useAuthenticatedUserStore } from '@/store/useAuthenticatedUserStore';

import homeService from '../home.services';

export const GET_MOVIE_LIST_TOP_RATED_QUERY_KEY = 'getMovieListTopRated';

export type UseGetMovieListTopRatedQueryKey = [typeof GET_MOVIE_LIST_TOP_RATED_QUERY_KEY, id: string];

export const useGetMovieListTopRatedQuery = () => {
	const { isAuthenticated } = useAuthenticatedUserStore();

	return useQuery(
		queryOptions({
			queryKey: [GET_MOVIE_LIST_TOP_RATED_QUERY_KEY],
			queryFn: homeService.getMovieListTopRated,
			staleTime: Infinity,
			enabled: isAuthenticated,
		})
	);
};
