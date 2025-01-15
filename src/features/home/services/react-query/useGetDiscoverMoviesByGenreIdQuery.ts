import { useQuery } from '@tanstack/react-query';

import tmdbService from '@/features/home/services/tmdb.services';
import { useAuthenticatedUserStore } from '@/store/useAuthenticatedUserStore';

export const GET_DISCOVER_MOVIES_BY_GENRES_QUERY_KEY = 'getDiscoverMoviesByGenres';

export type UseGetDiscoverMoviesByGenresQueryKey = [typeof GET_DISCOVER_MOVIES_BY_GENRES_QUERY_KEY, id: number];

export const useGetDiscoverMoviesByGenreIdQuery = (genreId: number) => {
	const { isAuthenticated } = useAuthenticatedUserStore();

	return useQuery({
		queryKey: [GET_DISCOVER_MOVIES_BY_GENRES_QUERY_KEY, genreId] as UseGetDiscoverMoviesByGenresQueryKey,
		queryFn: () => tmdbService.getDiscoverMoviesByGenreId(genreId),
		staleTime: Number.POSITIVE_INFINITY,
		enabled: isAuthenticated,
	});
};
