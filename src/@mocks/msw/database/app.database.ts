import { faker } from '@faker-js/faker';
import { factory, manyOf, primaryKey } from '@mswjs/data';

export const mockAppDB = factory({
	user: {
		id: primaryKey(faker.string.uuid),
		email: String,
		password: String,
		displayName: String,
		profiles: manyOf('profile'),
	},
	profile: {
		id: primaryKey(faker.string.uuid),
		name: String,
		photoURL: String,
		kidProfile: Boolean,
	},
});

// Default user
const profile = mockAppDB.profile.create({
	id: 'b139ef01-4e87-46e9-91c4-42e3f41f3667',
	name: 'Marcos Santos',
	photoURL: '/assets/images/app/profiles/popular/01.svg',
	kidProfile: false,
});

mockAppDB.user.create({
	id: 'a139ef00-4e67-46e9-91c4-42e3f41f3661',
	email: 'marcos@example.com',
	password: 'password',
	displayName: 'Marcos Santos',
	profiles: [profile],
});
