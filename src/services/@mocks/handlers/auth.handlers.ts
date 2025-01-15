import { http } from 'msw';

import { userMethods } from '@/@mocks/msw/database/modelMethods';
import { createErrorResponse, createSuccessResponse } from '@/@mocks/msw/responseFactory';
import { generateJWTToken } from '@/services/@mocks/functions/auth.functions';
import type { AuthSignInPayload } from '@/services/@types/auth.types';

export const authHandlers = [
	http.post<never, AuthSignInPayload>('api/auth/sign-in', async ({ request }) => {
		const { email, password } = await request.json();

		try {
			const userFound = userMethods.readUserByCredentials({ email, password });

			if (userFound) {
				return createSuccessResponse({
					data: {
						user: userFound,
						access_token: generateJWTToken({}),
					},
					status: 200,
				});
			}
			return createErrorResponse({
				status: 401,
				message: 'E-mail ou senha incorretos',
			});
		} catch {
			return createErrorResponse({
				status: 503,
				message: 'Serviço indisponível',
			});
		}
	}),
];
