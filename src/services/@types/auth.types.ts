import { SuccessResponse } from '@/@types/http.types';
import { ReadUser } from '@/@types/user.types';

export type AuthSignInReturn = SuccessResponse<{
	user: ReadUser;
	access_token: string;
}>;

export type AuthSignInPayload = {
	email: string;
	password: string;
};
