import { HttpResponse, http } from 'msw';

import { CreateTaskParams, DeleteTaskParams, UpdateTaskParams } from '@/features/to-do-list/types/to-do-list.types';
import { createErrorResponse } from '@/libs/msw/errorResponseFactories';

import { toDoListDB } from './to-do-list.db';

export const toDoListHandlers = [
	http.post<never, CreateTaskParams>('api/tasks', async ({ request }) => {
		const { name } = await request.json();

		const newUser = toDoListDB.task.create({ name, isDone: false });

		return HttpResponse.json(newUser, { status: 201 });
	}),
	http.get('api/tasks', () => {
		const tasks = toDoListDB.task.getAll();
		return HttpResponse.json(tasks, { status: 200 });
	}),
	http.put<{ id: string }, UpdateTaskParams>('api/tasks/:id', async ({ request, params }) => {
		const newTask = await request.json();

		const existingTask = toDoListDB.task.findFirst({
			where: {
				id: {
					equals: params.id,
				},
			},
		});

		if (!existingTask) {
			return createErrorResponse({
				status: 404,
				message: 'Task not found',
				code: 'NOT_FOUND',
			});
		}

		const updatedTask = toDoListDB.task.update({
			where: {
				id: {
					equals: params.id,
				},
			},
			data: {
				id: params.id,
				...newTask,
			},
		});

		return HttpResponse.json(updatedTask, { status: 200 });
	}),
	http.patch<{ id: string }, UpdateTaskParams>('api/tasks/:id', async ({ request, params }) => {
		const taskUpdates = await request.json();

		const task = toDoListDB.task.findFirst({
			where: {
				id: {
					equals: params.id,
				},
			},
		});

		if (!task) {
			return createErrorResponse({
				status: 404,
				message: 'Task not found',
				code: 'NOT_FOUND',
			});
		}

		const updatedTask = toDoListDB.task.update({
			where: {
				id: {
					equals: params.id,
				},
			},
			data: {
				...task,
				...taskUpdates,
			},
		});

		return HttpResponse.json(updatedTask, { status: 200 });
	}),
	http.delete<{ id: string }, DeleteTaskParams>('api/tasks/:id', async ({ params }) => {
		const deletedTask = toDoListDB.task.delete({
			where: {
				id: {
					equals: params.id,
				},
			},
		});

		return HttpResponse.json(deletedTask, { status: 200 });
	}),
];
