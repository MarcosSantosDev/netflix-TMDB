export type ProfileDB = {
	id: string;
	name: string;
	photoURL: string;
	kidProfile: boolean;
};

export type ReadProfile = ProfileDB;

export type NewProfile = Omit<ProfileDB, 'id'>;

export type UpdateProfile = Partial<Omit<ProfileDB, 'id'>>;
