import { queryOptions, useQuery } from '@tanstack/react-query';

import tmdbService from '@/features/home/services/tmdb.services';

export const GET_TY_INFO_QUERY_KEY = 'getTvInfoQuery';

export type UseGetTvInfoQueryKey = [typeof GET_TY_INFO_QUERY_KEY, id: number];

export const useGetTvInfoQuery = (seriesId: number) => {
	return useQuery(
		queryOptions({
			queryKey: [GET_TY_INFO_QUERY_KEY, seriesId] as UseGetTvInfoQueryKey,
			queryFn: () => tmdbService.getTvInfo(seriesId),
			staleTime: Infinity,
			enabled: !!seriesId,
		})
	);
};
