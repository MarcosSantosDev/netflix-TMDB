import { SuccessResponse } from '@/@types/http.types';
import type { ReadUser } from '@/@types/user.types';
import { apiClient } from '@/libs/axios';

const userService = {
	getUserById: async (id: string) => {
		const response = await apiClient.get<SuccessResponse<ReadUser>>(`/me/${id}`);
		return response.data;
	},
};

export default userService;
