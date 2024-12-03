import { Icon } from '@/components/ui';

import { ProfileButton } from './ProfileButton';

export const NewProfile = () => (
	<ProfileButton
		label="Novo Perfil"
		onClick={() => {}}
	>
		<div className="flex h-52 w-52 items-center justify-center rounded-full bg-neutral-400">
			<Icon
				size="xl"
				name="plus"
				className="text-black"
			/>
		</div>
	</ProfileButton>
);
