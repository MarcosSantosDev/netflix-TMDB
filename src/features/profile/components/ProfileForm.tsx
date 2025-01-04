import * as React from 'react';

import { Controller, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

import { Button } from '@/components/ui/Button/Button';
import { Checkbox } from '@/components/ui/Checkbox';
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/Dialog';
import { Icon } from '@/components/ui/Icon/Icon';
import { Input } from '@/components/ui/Input/Input';
import { Label } from '@/components/ui/Label/Label';
import ProfileAvatars from '@/features/profile/components/ProfileAvatars';
import { useGetProfileByIdQuery } from '@/features/profile/services/react-query/useGetProfileByIdQuery';
import useToast from '@/hooks/useToast';

import { useCreateProfileMutation } from '../services/react-query/useCreateProfileMutation';
import { useDeleteProfileMutation } from '../services/react-query/useDeleteProfileMutation';
import { useUpdateProfileMutation } from '../services/react-query/useUpdateProfileMutation';

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
	const { showErrorToast } = useToast();

	const { id } = useParams();
	const isNewProfile = id === 'new';

	const { refetch: getProfile, data: profile } = useGetProfileByIdQuery('b139ef01-4e87-46e9-91c4-42e3f41f3667');
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
		try {
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
		} catch {
			showErrorToast('Ocorreu um erro, e não foi possivel salvar o perfil');
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

	React.useEffect(() => {
		if (!isNewProfile) {
			getProfile();
		} else {
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
		<form
			className="max-w-400 flex w-full flex-col gap-20"
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
					<DialogContent size="lg">
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
			<div className="flex w-full justify-center gap-20 py-20">
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
	);
};

export default ProfileForm;
