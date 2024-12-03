import { http } from 'msw';

import type { AuthSignInPayload } from '@/features/auth/types/auth.types';
import { createErrorResponse, createSuccessResponse } from '@/libs/msw/responseFactory';
import { userDB } from '@/mocks/msw/db';

import { generateJWTToken } from './auth.functions';

export const authHandlers = [
	http.post<never, AuthSignInPayload>('api/auth/sign-in', async ({ request }) => {
		const { email, password } = await request.json();

		try {
			const userFound = userDB.readUserByCredentials({ email, password });

			if (userFound) {
				const accessToken = generateJWTToken({});

				return createSuccessResponse({
					data: {
						user: userFound,
						access_token: accessToken,
					},
					status: 200,
				});
			} else {
				return createErrorResponse({
					status: 401,
					message: 'E-mail ou senha incorretos',
				});
			}
		} catch {
			return createErrorResponse({
				status: 503,
				message: 'Serviço indisponível',
			});
		}
	}),
];
