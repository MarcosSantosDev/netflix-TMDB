import * as React from 'react';

import { ReadProfile } from '@/@types/profile.types';
import { Icon } from '@/components/ui';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu';
import { useAuth } from '@/features/auth/hooks/useAuth';

type ProfileImgProps = {
	photoURL: string;
};

const ProfileImg = ({ photoURL }: ProfileImgProps) => (
	<img
		src={photoURL}
		className="h-32 w-32 object-cover"
	/>
);

type ProfileMenuProps = {
	profile: ReadProfile;
};

export const ProfileMenu = ({ profile }: ProfileMenuProps) => {
	const { logout } = useAuth();

	const [openProfileMenu, setOpenProfileMenu] = React.useState(false);

	const handleToggleProfileMenu = () => {
		setOpenProfileMenu((currentState) => !currentState);
	};

	const handleLogout = () => {
		logout();
	};

	return (
		<DropdownMenu
			open={openProfileMenu}
			onOpenChange={handleToggleProfileMenu}
		>
			<DropdownMenuTrigger>
				<div className="flex h-auto w-fit items-center justify-center gap-10 rounded-sm text-white">
					<ProfileImg photoURL={profile?.photoURL ?? ''} />
					<Icon
						name="chevron-down"
						size="lg"
					/>
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuLabel>
					<div className="flex items-center justify-start gap-10">
						<ProfileImg photoURL={profile?.photoURL ?? ''} />
						<span className="text-inherit">{profile?.name ?? ''}</span>
					</div>
				</DropdownMenuLabel>
				<DropdownMenuItem>
					<Icon
						name="pencil-ruler"
						size="md"
					/>
					<span className="text-inherit">Gerenciar perfis</span>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<Icon
						name="replace"
						size="md"
					/>
					<span className="text-inherit">Trocar perfil</span>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<Icon
						name="user"
						size="md"
					/>
					<span className="text-inherit">Minha conta</span>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<Icon
						name="circle-help"
						size="md"
					/>
					<span className="text-inherit">Centro de ajuda</span>
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem onClick={handleLogout}>
					<Icon
						name="log-out"
						size="md"
					/>
					<span className="text-inherit">Sair da Netflix</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
