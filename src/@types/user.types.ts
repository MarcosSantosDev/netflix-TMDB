import { Profile } from './profile.types';

type UserDB = {
	id: string;
	email: string;
	password: string;
	displayName: string;
	photoURL?: string | null;
	profession?: string | null;
	profiles: Profile[];
};

export type User = UserDB;

export type ReadUser = Omit<UserDB, 'password'>;

export type NewUser = Omit<UserDB, 'id' | 'profiles'>;

export type UpdateUser = Partial<Omit<UserDB, 'id' | 'password' | 'email'>>;
