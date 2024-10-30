import { setupWorker } from 'msw/browser';

import { env } from '@/env';

import { handlers } from './handlers';

const worker = setupWorker(...handlers);

export const enableMocking = () => {
	if (env.MODE === 'development' && env.VITE_MSW_ACTIVATED === 'true') {
		return worker.start({
			serviceWorker: {
				url: '/mockServiceWorker.js',
			},
			onUnhandledRequest: 'bypass',
		});
	}
	return Promise.resolve();
};
