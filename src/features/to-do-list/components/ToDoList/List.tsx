import { useIsMutating } from '@tanstack/react-query';

import {
	useMutationUpdateTaskStatus,
	useMutationDeleteTask,
} from '@/features/to-do-list/services/react-query/to-do-list.mutations';
import { useQueryFetchTasks } from '@/features/to-do-list/services/react-query/to-do-list.queries';

import ListItem from './ListItem';

const List = () => {
	const { data: taskList, isLoading: isLoadingTaskList, isFetching: isFetchingTaskList } = useQueryFetchTasks();
	const { mutateAsync: mutateUpdateTaskStatus } = useMutationUpdateTaskStatus();
	const { mutateAsync: mutateDeleteTask } = useMutationDeleteTask();

	const isLoadingMutations = useIsMutating() !== 0;

	const isLoading = isLoadingTaskList || isLoadingMutations;

	return (
		<div className="flex flex-col items-start justify-center gap-y-10">
			<ul className="grid h-max w-full gap-y-10">
				{taskList?.map((task) => (
					<li key={task.id}>
						<ListItem
							task={task}
							onCompleteTask={({ id }) => {
								mutateUpdateTaskStatus({ id, isDone: !task.isDone });
							}}
							onDeleteTask={({ id }) => {
								mutateDeleteTask({ id });
							}}
						/>
					</li>
				))}
			</ul>

			<div className="flex h-40 w-max items-center justify-between">
				<p className="text-md font-bold text-neutral-600">
					{isLoading ? 'Loading task lists...' : null}
					{!isLoading && isFetchingTaskList ? 'Revalidating task lists...' : null}
				</p>
			</div>
		</div>
	);
};

export default List;
