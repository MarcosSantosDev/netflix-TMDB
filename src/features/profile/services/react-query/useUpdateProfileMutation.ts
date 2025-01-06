import { useMutation } from '@tanstack/react-query';

import profileService from '@/features/profile/services/profile.services';
import useToast from '@/hooks/useToast';

const UPDATE_PROFILE_MUTATION_KEY = 'authSignInUserMutation';

export type USE_UPDATE_PROFILE_MUTATION_KEY = [typeof UPDATE_PROFILE_MUTATION_KEY];

export const useUpdateProfileMutation = () => {
	const { showSuccessToast, showErrorToast } = useToast();

	return useMutation({
		mutationKey: [UPDATE_PROFILE_MUTATION_KEY] as USE_UPDATE_PROFILE_MUTATION_KEY,
		mutationFn: profileService.updateProfileById,
		onSuccess() {
			showSuccessToast('Perfil atualizado com sucesso!');
		},
		onError() {
			showErrorToast('Ocorreu um erro, e não foi possivel atualizar o perfil');
		},
	});
};
