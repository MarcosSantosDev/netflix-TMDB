import * as React from 'react';

import { Controller, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router';

import { Button } from '@/components/ui/Button/Button';
import { Checkbox } from '@/components/ui/Checkbox';
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/Dialog';
import { Icon } from '@/components/ui/Icon/Icon';
import { Input } from '@/components/ui/Input/Input';
import { Label } from '@/components/ui/Label/Label';
import ProfileAvatars from '@/features/profile/components/ProfileAvatars';
import { useCreateProfileMutation } from '@/features/profile/services/react-query/useCreateProfileMutation';
import { useDeleteProfileMutation } from '@/features/profile/services/react-query/useDeleteProfileMutation';
import { useGetProfileByIdQuery } from '@/features/profile/services/react-query/useGetProfileByIdQuery';
import { useUpdateProfileMutation } from '@/features/profile/services/react-query/useUpdateProfileMutation';
import routePaths from '@/router/config/routePaths';

const randonProfileImage = () => {
	const randonProfileImageNumber = Math.floor(Math.random() * 16) + 1;
	if (randonProfileImageNumber < 10) {
		return `/assets/images/app/profiles/popular/0${randonProfileImageNumber}.svg`;
	}
	return `/assets/images/app/profiles/popular/${randonProfileImageNumber}.svg`;
};

type ProfileFormProps = {
	profileImage: string;
	profileName: string;
	kidProfile: boolean;
};

const ProfileForm = () => {
	const navigate = useNavigate();
	const { id = '' } = useParams();
	const isNewProfile = id === 'new';

	const { data: profile } = useGetProfileByIdQuery(id);
	const { mutate: createProfile } = useCreateProfileMutation();
	const { mutate: updateProfile } = useUpdateProfileMutation();
	const { mutate: deleteProfile } = useDeleteProfileMutation();

	const [profileImage, setProfileImage] = React.useState('');

	const { handleSubmit, register, control, setValue } = useForm<ProfileFormProps>({
		defaultValues: {
			profileImage: '',
			profileName: '',
			kidProfile: false,
		},
	});

	const onSubmit = (formData: ProfileFormProps) => {
		const profileData = {
			name: formData.profileName,
			photoURL: formData.profileImage,
			kidProfile: formData.kidProfile,
		};
		if (!isNewProfile) {
			if (profile) {
				updateProfile({ id: profile.id, ...profileData });
			}
		} else {
			createProfile(profileData);
		}
	};

	const handleSelectAvatar = (avatar: string) => {
		setProfileImage(avatar);
		setValue('profileImage', avatar);
	};

	const handleDeleteProfile = () => {
		if (profile) {
			deleteProfile(profile.id);
		}
	};

	const handleGoBack = () => {
		navigate(routePaths.PROFILES);
	};

	React.useEffect(() => {
		if (isNewProfile) {
			setProfileImage(randonProfileImage());
			setValue('profileImage', profileImage);
		}
	}, [isNewProfile]);

	React.useEffect(() => {
		const profileImageUrl = profile?.photoURL ?? '';
		setProfileImage(profileImageUrl);
		setValue('profileImage', profileImageUrl);
		setValue('profileName', profile?.name ?? '');
		setValue('kidProfile', profile?.kidProfile ?? false);
	}, [profile]);

	return (
		<div className="max-w-400 space-y-20">
			<form
				className="flex w-full max-w-full flex-col gap-20"
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className="flex h-100 gap-20">
					<Dialog>
						<DialogTrigger asChild>
							<div className="relative h-100 w-100 overflow-hidden rounded-sm hover:cursor-pointer">
								<img
									src={profileImage}
									alt="profile"
									className="h-full w-full rounded-sm object-cover"
								/>
								<div className="absolute top-0 z-30 flex h-full w-full items-center justify-center bg-black/60 transition-all duration-200 hover:bg-black/80">
									<Icon
										size="lg"
										name="images"
										className="text-neutral-200"
									/>
								</div>
							</div>
						</DialogTrigger>
						<DialogContent
							size="lg"
							aria-describedby="choose profile avatar"
						>
							<DialogHeader>
								<DialogTitle className="text-center">Escolha um avatar</DialogTitle>
							</DialogHeader>
							<div className="h-[60vh] w-full overflow-y-auto overflow-x-hidden">
								<DialogClose>
									<ProfileAvatars onSelectImagePath={handleSelectAvatar} />
								</DialogClose>
							</div>
						</DialogContent>
					</Dialog>
					<div className="flex w-240 flex-col gap-20">
						<Input
							{...register('profileName')}
							type="text"
							placeholder="Nome do perfil"
						/>
						<div className="flex items-center gap-10">
							<Controller
								name="kidProfile"
								control={control}
								render={({ field: { onChange, onBlur, value, ref } }) => {
									return (
										<Checkbox
											id="kidProfile"
											ref={ref}
											onCheckedChange={onChange}
											onBlur={onBlur}
											checked={value}
										/>
									);
								}}
							/>
							<Label htmlFor="kidProfile">Perfil para crianças</Label>
						</div>
					</div>
				</div>
				<div className="flex w-full justify-center gap-20">
					{!isNewProfile ? (
						<Button
							type="button"
							variant="outlined"
							size="lg"
							className="w-full px-40"
							icon="trash"
							onClick={handleDeleteProfile}
						>
							Deletar
						</Button>
					) : null}
					<Button
						type="submit"
						variant="tertiary"
						size="lg"
						className="w-full px-40"
					>
						Salvar
					</Button>
				</div>
			</form>
			<Button
				type="button"
				variant="link"
				size="lg"
				className="w-full px-40"
				icon="arrow-left"
				onClick={handleGoBack}
			>
				Voltar
			</Button>
		</div>
	);
};

export default ProfileForm;
