import { http } from 'msw';

import { createErrorResponse, createSuccessResponse } from '@/libs/msw/responseFactory';
import { userDB } from '@/mocks/msw/db';

export const userHandlers = [
	http.get('api/me/:id', ({ params }) => {
		try {
			const { id } = params as { id: string };
			const userFound = userDB.readUserById(id);

			if (userFound) {
				return createSuccessResponse({
					data: userFound,
					status: 200,
				});
			} else {
				return createErrorResponse({
					status: 404,
					message: 'Usuário não encontrado',
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
