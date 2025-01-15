import { useQuery } from '@tanstack/react-query';

import tmdbService from '@/features/home/services/tmdb.services';
import { useAuthenticatedUserStore } from '@/store/useAuthenticatedUserStore';

export const GET_GENRES_QUERY_KEY = 'getGenresQuery';

export type UseGetGenresQueryKey = [typeof GET_GENRES_QUERY_KEY];

export const useGetGenresQuery = () => {
	const { isAuthenticated } = useAuthenticatedUserStore();

	return useQuery({
		queryKey: [GET_GENRES_QUERY_KEY] as UseGetGenresQueryKey,
		queryFn: tmdbService.getGenres,
		staleTime: Number.POSITIVE_INFINITY,
		enabled: isAuthenticated,
	});
};
