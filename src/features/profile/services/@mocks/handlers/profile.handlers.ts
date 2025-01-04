import { http } from 'msw';

import { profileMethods } from '@/@mocks/msw/database/modelMethods';
import { createErrorResponse, createSuccessResponse } from '@/@mocks/msw/responseFactory';
import { NewProfile, ReadProfile } from '@/@types/profile.types';

export const profileHandlers = [
	http.get('api/profiles/:id', ({ params }) => {
		try {
			const { id } = params as { id: string };

			const profileFound = profileMethods.readProfileById(id);

			if (profileFound) {
				return createSuccessResponse({
					data: profileFound,
					status: 200,
				});
			} else {
				return createErrorResponse({
					status: 404,
					message: 'Perfil não encontrado',
				});
			}
		} catch {
			return createErrorResponse({
				status: 503,
				message: 'Serviço indisponível',
			});
		}
	}),
	http.post<never, NewProfile>('api/profiles', async ({ request }) => {
		const { kidProfile, name, photoURL } = await request.json();

		try {
			const profileFound = profileMethods.readProfileByName(name);

			if (profileFound) {
				return createErrorResponse({
					status: 400,
					message: 'Nome do perfil já existe',
				});
			} else {
				const newProfile = profileMethods.createProfile({
					kidProfile,
					name,
					photoURL,
				});

				return createSuccessResponse({
					data: newProfile,
					status: 201,
				});
			}
		} catch {
			return createErrorResponse({
				status: 503,
				message: 'Serviço indisponível',
			});
		}
	}),
	http.put<never, ReadProfile>('api/profiles/:id', async ({ params, request }) => {
		const { id } = params as { id: string };
		const { kidProfile, name, photoURL } = await request.json();

		try {
			const profileFound = profileMethods.readProfileById(id);

			if (profileFound) {
				const profileFoundByName = profileMethods.readProfileByName(name);
				const profileFoundByNameIsDifferent = profileFoundByName && profileFoundByName.id !== id;

				if (profileFoundByNameIsDifferent) {
					return createErrorResponse({
						status: 400,
						message: 'Nome do perfil já está em uso',
					});
				}

				const updatedProfile = profileMethods.updateProfile(id, {
					kidProfile,
					name,
					photoURL,
				});

				return createSuccessResponse({
					data: updatedProfile,
					status: 201,
				});
			} else {
				return createErrorResponse({
					status: 400,
					message: 'Perfil não encontrado',
				});
			}
		} catch {
			return createErrorResponse({
				status: 503,
				message: 'Serviço indisponível',
			});
		}
	}),
	http.delete('api/profiles/:id', async ({ params }) => {
		const { id } = params as { id: string };

		try {
			const profileFound = profileMethods.readProfileById(id);

			if (profileFound) {
				const deletedProfile = profileMethods.deletedProfile(id);

				return createSuccessResponse({
					data: deletedProfile,
					status: 201,
				});
			} else {
				return createErrorResponse({
					status: 400,
					message: 'Perfil não encontrado',
				});
			}
		} catch {
			return createErrorResponse({
				status: 503,
				message: 'Serviço indisponível',
			});
		}
	}),
];
