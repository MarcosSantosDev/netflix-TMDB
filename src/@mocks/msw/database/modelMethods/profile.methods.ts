import type { NewProfile, ReadProfile, UpdateProfile } from '@/@types/profile.types';

import { mockAppDB } from '../app.database';

export const profileMethods = {
	readProfileById: (profileId: string): ReadProfile | null => {
		const profile = mockAppDB.profile.findFirst({
			where: {
				id: {
					equals: profileId,
				},
			},
		});

		return profile;
	},
	readProfileByName: (profileName: string): ReadProfile | null => {
		const profile = mockAppDB.profile.findFirst({
			where: {
				name: {
					equals: profileName,
				},
			},
		});

		return profile;
	},
	createProfile: (profile: NewProfile): ReadProfile => {
		return mockAppDB.profile.create(profile);
	},
	updateProfile: (profileId: string, profileUpdated: UpdateProfile): ReadProfile | null => {
		const updatedData = mockAppDB.profile.update({
			where: {
				id: {
					equals: profileId,
				},
			},
			data: profileUpdated,
		});

		return updatedData;
	},
	deletedProfile: (profileId: string): void => {
		mockAppDB.profile.delete({
			where: {
				id: {
					equals: profileId,
				},
			},
		});
	},
};
