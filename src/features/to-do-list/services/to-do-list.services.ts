import { CreateTaskParams, Task } from '@/features/to-do-list/types/to-do-list.types';
import { apiClient } from '@/libs/axios';

const toDoListService = {
	createTask: async (data: CreateTaskParams) => {
		const response = await apiClient.post<Task>('/tasks', data);
		return response.data;
	},
	fetchTasks: async () => {
		const response = await apiClient.get<Task[]>('/tasks');
		return response.data;
	},
	fetchTaskById: async (data: Pick<Task, 'id'>) => {
		const response = await apiClient.get<Task[]>(`/tasks/${data.id}`);
		return response.data;
	},
	updateTask: async ({ id, ...data }: Task) => {
		const response = await apiClient.put<Task[]>(`/tasks/${id}`, data);
		return response.data;
	},
	updateTaskStatus: async ({ id, ...data }: Omit<Task, 'name'>) => {
		const response = await apiClient.patch<Task[]>(`/tasks/${id}`, data);
		return response.data;
	},
	deleteTask: async ({ id }: Pick<Task, 'id'>) => {
		const response = await apiClient.delete<Task[]>(`/tasks/${id}`);
		return response.data;
	},
};

export default toDoListService;
