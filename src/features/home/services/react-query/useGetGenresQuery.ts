import { queryOptions, useQuery } from '@tanstack/react-query';

import { useAuthenticatedUserStore } from '@/store/useAuthenticatedUserStore';

import homeService from '../home.services';

export const GET_GENRES_QUERY_KEY = 'getGenresQuery';

export type UseGetGenresQueryKey = [typeof GET_GENRES_QUERY_KEY];

export const useGetGenresQuery = () => {
	const { isAuthenticated } = useAuthenticatedUserStore();

	return useQuery(
		queryOptions({
			queryKey: [GET_GENRES_QUERY_KEY],
			queryFn: homeService.getGenres,
			staleTime: Infinity,
			enabled: isAuthenticated,
		})
	);
};
