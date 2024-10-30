export type Task = {
	id: string;
	name: string;
	isDone: boolean;
};

export type CreateTaskParams = Pick<Task, 'name'>;

export type UpdateTaskParams = Omit<Task, 'id'>;

export type DeleteTaskParams = Pick<Task, 'id'>;
