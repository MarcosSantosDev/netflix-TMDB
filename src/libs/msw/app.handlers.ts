import { authHandlers } from '@/features/auth/services/mocks/auth.handlers';
import { userHandlers } from '@/services/mocks/user.handlers';

export const handlers = [...authHandlers, ...userHandlers];
