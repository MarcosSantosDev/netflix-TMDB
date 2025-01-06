import { useMutation } from '@tanstack/react-query';

import profileService from '@/features/profile/services/profile.services';
import useToast from '@/hooks/useToast';

const CREATE_PROFILE_MUTATION_KEY = 'authSignInUserMutation';

export type USE_CREATE_PROFILE_MUTATION_KEY = [typeof CREATE_PROFILE_MUTATION_KEY];

export const useCreateProfileMutation = () => {
	const { showSuccessToast, showErrorToast } = useToast();

	return useMutation({
		mutationKey: [CREATE_PROFILE_MUTATION_KEY] as USE_CREATE_PROFILE_MUTATION_KEY,
		mutationFn: profileService.createProfile,
		onSuccess: () => {
			showSuccessToast('Perfil criado com sucesso!');
		},
		onError() {
			showErrorToast('Ocorreu um erro, e não foi possivel criar o perfil');
		},
	});
};
