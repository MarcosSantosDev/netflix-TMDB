export type AuthUser = {
	displayName: string;
	photoURL?: string;
	email: string;
	profession?: string;
};

export type AuthUserReturn = AuthUser;

export type AuthSignInPayload = {
	email: string;
	password: string;
	remember: boolean;
};

export type AuthSignInReturn = {
	user: AuthUser;
	access_token: string;
};

export type AuthSignUpPayload = {
	userName: string;
	email: string;
	password: string;
	confirmation_password: string;
};
