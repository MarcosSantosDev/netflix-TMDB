import { useNavigate } from 'react-router';

import { ReadProfile } from '@/@types/profile.types';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu';
import { Icon } from '@/components/ui/Icon/Icon';
import { useAuth } from '@/features/auth/hooks/useAuth';

type ProfileImgProps = {
	photoURL: string;
};

const ProfileImg = ({ photoURL }: ProfileImgProps) => (
	<img
		src={photoURL}
		alt="Profile"
		className="h-28 w-28 object-cover md:h-32 md:w-32"
	/>
);

type ProfileMenuProps = {
	profile: ReadProfile;
};

export const ProfileMenu = ({ profile }: ProfileMenuProps) => {
	const navigate = useNavigate();
	const { logout, resetSelectedProfile } = useAuth();

	const { photoURL = '', name = '' } = profile;

	const handleLogout = () => {
		logout();
	};

	const handleChangeProfile = () => {
		resetSelectedProfile();
		navigate('/profiles');
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<div
					data-testid="ProfileMenuButton"
					aria-label="Abrir menu de perfil"
					className="flex h-auto w-fit cursor-pointer items-center justify-center gap-10 rounded-sm text-white"
				>
					<span className="max-w-64 truncate text-md text-inherit">{name}</span>
					<ProfileImg photoURL={photoURL} />
				</div>
			</DropdownMenuTrigger>

			<DropdownMenuContent
				data-testid="ProfileMenuContent"
				align="end"
			>
				<DropdownMenuLabel>
					<div className="flex items-center justify-start gap-10">
						<ProfileImg photoURL={photoURL} />
						<span className="text-inherit">{name}</span>
					</div>
				</DropdownMenuLabel>

				<DropdownMenuItem
					className="cursor-pointer"
					disabled
				>
					<Icon
						name="scan-face"
						size="lg"
					/>
					<span className="text-inherit">Gerenciar perfis</span>
				</DropdownMenuItem>

				<DropdownMenuItem
					className="cursor-pointer"
					onClick={handleChangeProfile}
				>
					<Icon
						name="replace"
						size="md"
					/>
					<span className="text-inherit">Trocar perfil</span>
				</DropdownMenuItem>

				<DropdownMenuItem
					className="cursor-pointer"
					disabled
				>
					<Icon
						name="user"
						size="md"
					/>
					<span className="text-inherit">Minha conta</span>
				</DropdownMenuItem>

				<DropdownMenuItem
					className="cursor-pointer"
					disabled
				>
					<Icon
						name="circle-help"
						size="md"
					/>
					<span className="text-inherit">Centro de ajuda</span>
				</DropdownMenuItem>

				<DropdownMenuSeparator />

				<DropdownMenuItem
					className="flex cursor-pointer justify-center"
					onClick={handleLogout}
				>
					<span className="text-inherit">Sair da Netflix</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
