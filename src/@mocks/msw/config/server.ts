import { setupServer } from 'msw/node';

import { handlers } from '@/@mocks/msw/app.handlers';

export const server = setupServer(...handlers);
