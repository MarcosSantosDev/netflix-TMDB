type ProfileDB = {
	id: string;
	name: string;
	photoURL: string;
};

export type Profile = ProfileDB;

export type NewProfile = Omit<ProfileDB, 'id'>;

export type UpdateProfile = Partial<Omit<ProfileDB, 'id'>>;
