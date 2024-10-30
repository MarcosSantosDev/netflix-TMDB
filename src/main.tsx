import * as React from 'react';

import ReactDOM from 'react-dom/client';

import { enableMocking } from '@/libs/msw/browser';

import '@/styles/globals.css';

import Router from './router';

const container = document.getElementById('root') as HTMLElement;

if (!container) {
	throw new Error('Failed to find the root element');
}

const root = ReactDOM.createRoot(container);

enableMocking().then(() => {
	root.render(
		<React.StrictMode>
			<Router />
		</React.StrictMode>
	);
});
