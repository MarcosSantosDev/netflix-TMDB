import { ReadProfile } from './profile.types';

export type UserDB = {
	id: string;
	email: string;
	password: string;
	displayName: string;
	profiles: ReadProfile[];
};

export type ReadUser = Omit<UserDB, 'password'>;

export type NewUser = Omit<UserDB, 'id' | 'profiles'>;

export type UpdateUser = Partial<Omit<UserDB, 'id' | 'password' | 'email'>>;
