import { authHandlers } from '@/features/auth/services/mocks/auth.handlers';
import { toDoListHandlers } from '@/features/to-do-list/services/mocks/to-do-list.handlers';

export const handlers = [...authHandlers, ...toDoListHandlers];
