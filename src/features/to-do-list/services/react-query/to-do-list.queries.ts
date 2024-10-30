import { queryOptions, useQuery } from '@tanstack/react-query';

import toDoListService from '@/features/to-do-list/services/to-do-list.services';

import { TO_DO_LIST_TASKS } from './to-do-list.queryKeys';

export const useQueryFetchTasks = () => {
	return useQuery(
		queryOptions({
			queryKey: [TO_DO_LIST_TASKS],
			queryFn: toDoListService.fetchTasks,
			enabled: true,
		})
	);
};

export const useQueryFetchTaskById = (id: string) => {
	return useQuery(
		queryOptions({
			queryKey: [TO_DO_LIST_TASKS, { task: id }],
			queryFn: () => toDoListService.fetchTaskById({ id }),
			enabled: true,
		})
	);
};
