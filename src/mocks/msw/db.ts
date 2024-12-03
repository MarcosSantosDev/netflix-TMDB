import { faker } from '@faker-js/faker';
import { factory, manyOf, nullable, primaryKey } from '@mswjs/data';

import { NewProfile, Profile, UpdateProfile } from '@/@types/profile.types';
import { NewUser, ReadUser, UpdateUser, User } from '@/@types/user.types';

const mockDB = factory({
	user: {
		id: primaryKey(faker.string.uuid),
		email: String,
		password: String,
		displayName: String,
		photoURL: nullable(String),
		profession: nullable(String),
		profiles: manyOf('profile'),
	},
	profile: {
		id: primaryKey(faker.string.uuid),
		name: String,
		photoURL: String,
	},
});

const profile = mockDB.profile.create({
	id: 'b139ef01-4e87-46e9-91c4-42e3f41f3667',
	name: 'MarcosSantosDev',
	photoURL: '/assets/images/app/profiles/red.png',
});

mockDB.user.create({
	id: 'a139ef00-4e67-46e9-91c4-42e3f41f3661',
	email: 'marcos@example.com',
	password: 'password',
	displayName: 'MarcosSantosDev',
	photoURL: 'https://github.com/MarcosSantosDev.png',
	profession: 'Frontend Engineer',
	profiles: [profile],
});

const formatReadUser = (user: User): ReadUser => {
	return {
		id: user.id,
		email: user.email,
		displayName: user.displayName,
		photoURL: user.photoURL,
		profession: user.profession,
		profiles: user.profiles,
	};
};

export const userDB = {
	createUser: (user: NewUser) => {
		const profile = mockDB.profile.create({
			name: user.displayName,
			photoURL: '/assets/images/app/profiles/red.png',
		});

		mockDB.user.create({ ...user, profiles: [profile] });
	},
	readUserByCredentials: (credentials: Pick<User, 'email' | 'password'>): ReadUser | null => {
		const user = mockDB.user.findFirst({
			where: {
				email: {
					equals: credentials.email,
				},
				password: {
					equals: credentials.password,
				},
			},
		});

		if (user) {
			return formatReadUser(user);
		}

		return null;
	},
	readUserById: (userId: string) => {
		const user = mockDB.user.findFirst({
			where: {
				id: {
					equals: userId,
				},
			},
		});

		if (user) {
			return formatReadUser(user);
		}

		return null;
	},
	updateUser: (userId: string, newUserData: UpdateUser) => {
		const updatedUser = mockDB.user.update({
			where: {
				id: {
					equals: userId,
				},
			},
			data: {
				...newUserData,
			},
		});

		return updatedUser;
	},
	deletedUser: (userId: string) => {
		mockDB.user.delete({
			where: {
				id: {
					equals: userId,
				},
			},
		});

		return null;
	},
};

export const profileDB = {
	createProfile: (profile: NewProfile): Profile => {
		return mockDB.profile.create(profile);
	},
	updateProfile: (profileId: string, profileUpdated: UpdateProfile): Profile | null => {
		const updatedData = mockDB.profile.update({
			where: {
				id: {
					equals: profileId,
				},
			},
			data: {
				name: profileUpdated.name,
				photoURL: profileUpdated.photoURL,
			},
		});

		return updatedData;
	},
	deletedProfile: (profileId: string): void => {
		mockDB.profile.delete({
			where: {
				id: {
					equals: profileId,
				},
			},
		});
	},
};
