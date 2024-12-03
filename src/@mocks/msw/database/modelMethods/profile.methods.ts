import { NewProfile, ReadProfile, UpdateProfile } from '@/@types/profile.types';

import { mockAppDB } from '../app.database';

export const profileMethods = {
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
			data: {
				name: profileUpdated.name,
				photoURL: profileUpdated.photoURL,
			},
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
