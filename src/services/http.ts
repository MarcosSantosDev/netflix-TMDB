import { env } from '@/env';
import { axiosCreateInstance } from '@/libs/axios';
import localStorageUtils from '@/utils/localStorage';

export const appHttpClient = axiosCreateInstance({
	baseURL: env.VITE_API_URL,
	getAccessToken: localStorageUtils.getAccessToken,
});

export const tmdbHttpClient = axiosCreateInstance({
	baseURL: env.VITE_TMDB_API_URL,
	getAccessToken: () => env.VITE_TMDB_API_ACCESS_TOKEN,
});
