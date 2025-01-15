import axios, { type AxiosError } from 'axios';

import type { ErrorResponse } from '@/@types/http.types';

import { showErrorToast } from './react-toastify';

type AxiosCreateInstanceParams = {
	baseURL: string;
	getAccessToken: () => string | null;
};

export const axiosCreateInstance = ({ baseURL, getAccessToken }: AxiosCreateInstanceParams) => {
	const axiosInstance = axios.create({
		baseURL,
	});

	axiosInstance.interceptors.request.use(
		(config) => {
			const token = getAccessToken();
			if (token) {
				config.headers.Authorization = `Bearer ${token}`;
			}
			return config;
		},
		(error) => Promise.reject(error)
	);

	axiosInstance.interceptors.response.use(
		(response) => response,
		(error: AxiosError<ErrorResponse>) => {
			if (error.response) {
				const errorResponse = error.response.data;

				showErrorToast(errorResponse.message);
			} else if (error.request) {
				showErrorToast('Sem resposta do servidor.');
			} else {
				showErrorToast(`Erro: ${error.message}`);
			}

			return Promise.reject(error);
		}
	);

	return axiosInstance;
};
