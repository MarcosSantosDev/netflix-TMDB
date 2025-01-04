import { profileHandlers } from '@/features/profile/services/@mocks/handlers/profile.handlers';
import { authHandlers } from '@/services/@mocks/handlers/auth.handlers';
import { userHandlers } from '@/services/@mocks/handlers/user.handlers';

export const handlers = [...authHandlers, ...userHandlers, ...profileHandlers];
