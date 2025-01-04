import { setupWorker } from 'msw/browser';

import { env } from '@/env';
import { handlers } from '@/services/@mocks/handlers/app.handlers';

export const enableMocking = () => {
	if (env.MODE === 'development' && env.VITE_MSW_ACTIVATED === 'true') {
		const worker = setupWorker(...handlers);
		return worker.start({
			serviceWorker: {
				url: '/mockServiceWorker.js',
			},
			onUnhandledRequest: 'bypass',
		});
	}
	return Promise.resolve();
};
