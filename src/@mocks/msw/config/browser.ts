import { setupWorker } from 'msw/browser';

import { handlers } from '@/@mocks/msw/app.handlers';
import { env } from '@/env';

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
