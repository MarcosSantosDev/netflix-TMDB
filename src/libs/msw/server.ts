import { setupServer } from 'msw/node';

import { handlers } from './app.handlers';

export const server = setupServer(...handlers);
