import { Icon, IconButton } from '@/components/ui';
import { Task } from '@/features/to-do-list/types/to-do-list.types';

type ListItemProps = {
	task: Task;
	onCompleteTask: (data: Pick<Task, 'id'>) => void;
	onDeleteTask: (data: Pick<Task, 'id'>) => void;
};

const ListItem = ({ task, onCompleteTask, onDeleteTask }: ListItemProps) => {
	return (
		<div className="grid grid-cols-[auto_auto] items-center justify-between gap-x-16 rounded-md border p-14">
			<div className="flex items-center gap-10">
				<IconButton
					title={task.isDone ? 'Deselect task as done' : 'Mark task as done'}
					variant="ghost"
					size="sm"
					onClick={() => onCompleteTask({ id: task.id })}
				>
					<Icon
						name={task.isDone ? 'square-check' : 'square'}
						size="md"
					/>
				</IconButton>
				<p
					aria-checked={task.isDone}
					className="text-md font-bold text-neutral-500 aria-checked:text-neutral-300 aria-checked:line-through aria-checked:decoration-neutral-800"
				>
					{task.name}
				</p>
			</div>
			<IconButton
				title="Delete task"
				variant="destructive"
				size="sm"
				onClick={() => onDeleteTask({ id: task.id })}
			>
				<Icon
					name="trash-2"
					size="md"
				/>
			</IconButton>
		</div>
	);
};

export default ListItem;
