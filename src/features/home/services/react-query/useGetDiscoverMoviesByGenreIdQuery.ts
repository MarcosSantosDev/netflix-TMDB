import { useQuery } from '@tanstack/react-query';

import homeService from '@/features/home/services/home.services';
import { useAuthenticatedUserStore } from '@/store/useAuthenticatedUserStore';

export const GET_DISCOVER_MOVIES_BY_GENRES_QUERY_KEY = 'getDiscoverMoviesByGenres';

export type UseGetDiscoverMoviesByGenresQueryKey = [typeof GET_DISCOVER_MOVIES_BY_GENRES_QUERY_KEY, id: string];

export const useGetDiscoverMoviesByGenreIdQuery = (genreId: number) => {
	const { isAuthenticated } = useAuthenticatedUserStore();

	return useQuery({
		queryKey: [GET_DISCOVER_MOVIES_BY_GENRES_QUERY_KEY, genreId],
		queryFn: () => homeService.getDiscoverMoviesByGenreId(genreId),
		staleTime: Infinity,
		enabled: isAuthenticated,
	});
};
