import { http } from 'msw';

import { userMethods } from '@/@mocks/msw/database/modelMethods';
import { createErrorResponse, createSuccessResponse } from '@/@mocks/msw/responseFactory';

export const userHandlers = [
	http.get('api/me/:id', ({ params }) => {
		try {
			const { id } = params as { id: string };
			const userFound = userMethods.readUserById(id);

			if (userFound) {
				return createSuccessResponse({
					data: userFound,
					status: 200,
				});
			}
			return createErrorResponse({
				status: 404,
				message: 'Usuário não encontrado',
			});
		} catch {
			return createErrorResponse({
				status: 503,
				message: 'Serviço indisponível',
			});
		}
	}),
];
