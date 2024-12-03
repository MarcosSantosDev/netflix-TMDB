// Categorias de códigos HTTP
export type HttpCodeCategory = 'INFORMATION' | 'SUCCESS' | 'REDIRECT' | 'CLIENT_ERROR' | 'SERVER_ERROR';

// Mapeamento das categorias de códigos HTTP
export type HttpStatusCode =
	// 1xx: Informational responses
	| 100
	| 101
	| 102
	| 103
	// 2xx: Success
	| 200
	| 201
	| 202
	| 203
	| 204
	| 205
	| 206
	| 207
	| 208
	| 226
	// 3xx: Redirection
	| 300
	| 301
	| 302
	| 303
	| 304
	| 305
	| 306
	| 307
	| 308
	// 4xx: Client errors
	| 400
	| 401
	| 402
	| 403
	| 404
	| 405
	| 406
	| 407
	| 408
	| 409
	| 410
	| 411
	| 412
	| 413
	| 414
	| 415
	| 416
	| 417
	| 418
	| 421
	| 422
	| 423
	| 424
	| 425
	| 426
	| 428
	| 429
	| 431
	| 451
	// 5xx: Server errors
	| 500
	| 501
	| 502
	| 503
	| 504
	| 505
	| 506
	| 507
	| 508
	| 510
	| 511;

// Helper para categorizar códigos HTTP
export const getHttpCodeCategory = (status: HttpStatusCode): HttpCodeCategory => {
	if (status >= 100 && status < 200) return 'INFORMATION';
	if (status >= 200 && status < 300) return 'SUCCESS';
	if (status >= 300 && status < 400) return 'REDIRECT';
	if (status >= 400 && status < 500) return 'CLIENT_ERROR';
	if (status >= 500 && status < 600) return 'SERVER_ERROR';
	throw new Error(`Invalid HTTP status code: ${status}`);
};

export type ErrorResponse = {
	status: HttpStatusCode;
	message: string;
	fields?: Record<string, string>;
};

export type SuccessResponse<T> = {
	status: HttpStatusCode;
	data: T;
};

export type Response<T> = SuccessResponse<T> | ErrorResponse;
