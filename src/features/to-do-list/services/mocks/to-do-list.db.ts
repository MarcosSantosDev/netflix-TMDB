import { faker } from '@faker-js/faker';
import { factory, primaryKey } from '@mswjs/data';

export const toDoListDB = factory({
	task: {
		id: primaryKey(faker.string.uuid),
		name: String,
		isDone: Boolean,
	},
});
