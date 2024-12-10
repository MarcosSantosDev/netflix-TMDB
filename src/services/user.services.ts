import { SuccessResponse } from '@/@types/http.types';
import type { ReadUser } from '@/@types/user.types';
import { appHttpClient } from '@/services/http';

const userService = {
	getUserById: async (id: string) => {
		const response = await appHttpClient.get<SuccessResponse<ReadUser>>(`/me/${id}`);
		return response.data;
	},
};

export default userService;
