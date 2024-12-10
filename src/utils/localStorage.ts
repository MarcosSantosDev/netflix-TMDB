import { BROWSER_STORE_TOKEN } from '@/constants/localStore';

const getAccessToken = () => {
	return localStorage.getItem(BROWSER_STORE_TOKEN);
};

const setAccessToken = (accessToken: string) => {
	if (accessToken) {
		localStorage.setItem(BROWSER_STORE_TOKEN, accessToken);
	}
};

const resetAccessToken = () => {
	localStorage.removeItem(BROWSER_STORE_TOKEN);
};

const utils = {
	getAccessToken,
	setAccessToken,
	resetAccessToken,
};

export default utils;
