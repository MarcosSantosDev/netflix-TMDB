import { useMutation } from '@tanstack/react-query';

import profileService from '@/features/profile/services/profile.services';
import useToast from '@/hooks/useToast';

const DELETE_PROFILE_MUTATION_KEY = 'authSignInUserMutation';

export type USE_DELETE_PROFILE_MUTATION_KEY = [typeof DELETE_PROFILE_MUTATION_KEY];

export const useDeleteProfileMutation = () => {
	const { showSuccessToast, showErrorToast } = useToast();

	return useMutation({
		mutationKey: [DELETE_PROFILE_MUTATION_KEY] as USE_DELETE_PROFILE_MUTATION_KEY,
		mutationFn: profileService.deleteProfileById,
		onSuccess: () => {
			showSuccessToast('Perfil removido com sucesso!');
		},
		onError() {
			showErrorToast('Ocorreu um erro, e não foi possivel remover o perfil');
		},
	});
};
