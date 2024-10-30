import { ACCESS_TOKEN } from '@/constants/localStore';

const getAccessToken = () => {
	return localStorage.getItem(ACCESS_TOKEN);
};

const setAccessToken = (accessToken: string) => {
	if (accessToken) {
		localStorage.setItem(ACCESS_TOKEN, accessToken);
	}
};

const resetAccessToken = () => {
	localStorage.removeItem(ACCESS_TOKEN);
};

const utils = {
	getAccessToken,
	setAccessToken,
	resetAccessToken,
};

export default utils;
