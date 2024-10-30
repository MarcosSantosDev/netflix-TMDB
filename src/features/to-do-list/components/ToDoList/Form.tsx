import * as React from 'react';

import { Icon, IconButton, Input } from '@/components/ui';
import { useMutationCreateTask } from '@/features/to-do-list/services/react-query/to-do-list.mutations';
import { CreateTaskParams } from '@/features/to-do-list/types/to-do-list.types';

const Form = () => {
	const formRef = React.useRef<HTMLFormElement>(null);

	const { mutateAsync: mutateAsyncCreateTask } = useMutationCreateTask();

	const confirmTaskCreation = async (user: CreateTaskParams) => {
		await mutateAsyncCreateTask(user);

		if (formRef.current) {
			formRef.current.reset();
		}
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (formRef.current) {
			const data = new FormData(formRef.current);
			const name = data.get('name') as string | null;

			if (name) {
				confirmTaskCreation({ name });
			}
		}
	};

	return (
		<div className="w-full space-y-20 rounded-md border p-14">
			<h3 className="text-h3">What are you going to do today ?</h3>
			<div className="flex gap-x-16">
				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className="contents"
				>
					<Input
						type="text"
						name="name"
						placeholder="Task name"
					/>
					<IconButton
						title="Create task"
						variant="confirm"
						size="md"
						type="submit"
					>
						<Icon
							name="square-plus"
							size="md"
						/>
					</IconButton>
				</form>
			</div>
		</div>
	);
};

export default Form;
