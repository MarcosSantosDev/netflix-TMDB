import Form from './Form';
import List from './List';

const ToDoList = () => {
	return (
		<div className="flex w-1/2 flex-col gap-y-20">
			<Form />
			<List />
		</div>
	);
};

export default ToDoList;
