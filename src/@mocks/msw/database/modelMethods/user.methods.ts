import { NewUser, ReadUser, UpdateUser, UserDB } from '@/@types/user.types';

import { mockAppDB } from '../app.database';

const formatReadUser = (user: UserDB): ReadUser => {
	return {
		id: user.id,
		email: user.email,
		displayName: user.displayName,
		profiles: user.profiles,
	};
};

export const userMethods = {
	createUser: (user: NewUser) => {
		const profile = mockAppDB.profile.create({
			name: user.displayName,
			photoURL: '/assets/images/app/profiles/red.png',
		});

		mockAppDB.user.create({ ...user, profiles: [profile] });
	},
	readUserByCredentials: (credentials: Pick<UserDB, 'email' | 'password'>): ReadUser | null => {
		const user = mockAppDB.user.findFirst({
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
		const user = mockAppDB.user.findFirst({
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
		const updatedUser = mockAppDB.user.update({
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
		mockAppDB.user.delete({
			where: {
				id: {
					equals: userId,
				},
			},
		});

		return null;
	},
};
