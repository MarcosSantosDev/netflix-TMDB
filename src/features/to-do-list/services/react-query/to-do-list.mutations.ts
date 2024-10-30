import { useMutation } from '@tanstack/react-query';

import toDoListService from '@/features/to-do-list/services/to-do-list.services';
import { queryClient } from '@/libs/react-query';

import { TO_DO_LIST_TASKS } from './to-do-list.queryKeys';

export const useMutationCreateTask = () => {
	return useMutation({
		mutationKey: [TO_DO_LIST_TASKS],
		mutationFn: toDoListService.createTask,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: [TO_DO_LIST_TASKS],
				exact: true,
			});
		},
	});
};

export const useMutationUpdateTask = () => {
	return useMutation({
		mutationKey: [TO_DO_LIST_TASKS],
		mutationFn: toDoListService.updateTask,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: [TO_DO_LIST_TASKS],
				exact: true,
			});
		},
	});
};

export const useMutationUpdateTaskStatus = () => {
	return useMutation({
		mutationKey: [TO_DO_LIST_TASKS, 'status'],
		mutationFn: toDoListService.updateTaskStatus,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: [TO_DO_LIST_TASKS],
				exact: true,
			});
		},
	});
};

export const useMutationDeleteTask = () => {
	return useMutation({
		mutationKey: [TO_DO_LIST_TASKS],
		mutationFn: toDoListService.deleteTask,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: [TO_DO_LIST_TASKS],
				exact: true,
			});
		},
	});
};
