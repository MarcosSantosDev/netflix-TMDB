import { HttpResponse } from 'msw';

import { type ErrorResponse, type SuccessResponse, getHttpCodeCategory } from '@/@types/http.types';

export const createSuccessResponse = <T>(successResponse: SuccessResponse<T>) => {
	return HttpResponse.json(
		{ data: successResponse.data, code: getHttpCodeCategory(successResponse.status) },
		{ status: successResponse.status }
	);
};

export const createErrorResponse = (error: ErrorResponse) => {
	return HttpResponse.json(
		{
			code: getHttpCodeCategory(error.status),
			...error,
		},
		{ status: error.status }
	);
};
