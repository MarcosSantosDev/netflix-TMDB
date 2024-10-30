import { HttpResponse } from 'msw';

import { ErrorResponse } from '@/@types/http.types';

export const createErrorResponse = (error: ErrorResponse) => {
	return HttpResponse.json(
		{
			code: error.code || 'UNKNOWN_ERROR',
			...error,
		},
		{ status: error.status }
	);
};

export const notFoundError = createErrorResponse({
	status: 404,
	message: 'Resource not found',
	code: 'NOT_FOUND',
});

export const unauthorizedError = createErrorResponse({
	status: 401,
	message: 'Unauthorized access',
	code: 'UNAUTHORIZED',
});

export const serverError = createErrorResponse({
	status: 500,
	message: 'Internal server error',
	code: 'SERVER_ERROR',
});
