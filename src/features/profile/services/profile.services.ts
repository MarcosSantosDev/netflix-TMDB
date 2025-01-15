import type { SuccessResponse } from '@/@types/http.types';
import type { NewProfile, ReadProfile } from '@/@types/profile.types';
import { appHttpClient } from '@/services/http';

const profileService = {
	getProfileById: async (id: string) => {
		const response = await appHttpClient.get<SuccessResponse<ReadProfile>>(`/profiles/${id}`);
		return response.data;
	},
	createProfile: async (data: NewProfile) => {
		const response = await appHttpClient.post<SuccessResponse<ReadProfile>>('/profiles', data);
		return response.data;
	},
	updateProfileById: async ({ id, ...data }: ReadProfile) => {
		const response = await appHttpClient.put<SuccessResponse<ReadProfile>>(`/profiles/${id}`, data);
		return response.data;
	},
	deleteProfileById: (id: string) => {
		return appHttpClient.delete<void>(`/profiles/${id}`);
	},
};

export default profileService;
