import axios, { AxiosError } from 'axios';

import { ErrorResponse } from '@/@types/http.types';
import { env } from '@/env';
import localStorageUtils from '@/utils/localStorage';

import { showErrorToast } from './react-toastify';

const axiosInstance = () => {
	const axiosInstance = axios.create({
		baseURL: env.VITE_API_URL,
	});

	axiosInstance.interceptors.request.use(
		(config) => {
			const token = localStorageUtils.getAccessToken();
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

const apiClient = axiosInstance();

export { apiClient };
