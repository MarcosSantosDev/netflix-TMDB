import { HttpResponse, http } from 'msw';

import type { AuthSignInPayload, AuthSignInReturn } from '@/features/auth/types/auth.types';
import { unauthorizedError } from '@/libs/msw/errorResponseFactories';

import { defaultUserAuthenticatedData, defaultAuthData } from './auth.fixtures';
import { generateJWTToken } from './auth.functions';

export const authHandlers = [
	http.get('api/auth/user', () => {
		return HttpResponse.json(defaultUserAuthenticatedData, { status: 200 });
	}),
	http.post<never, AuthSignInPayload>('api/auth/sign-in', async ({ request }) => {
		const { email, password } = await request.json();
		if (email === defaultAuthData.email && password === defaultAuthData.password) {
			const accessToken = generateJWTToken({});

			const data: AuthSignInReturn = {
				user: defaultUserAuthenticatedData,
				access_token: accessToken,
			};

			return HttpResponse.json(data, { status: 200 });
		} else {
			return unauthorizedError;
		}
	}),
];
