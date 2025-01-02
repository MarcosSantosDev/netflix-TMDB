import * as React from 'react';

import { Controller, useForm } from 'react-hook-form';

import { Button } from '@/components/ui/Button/Button';
import { Checkbox } from '@/components/ui/Checkbox';
import { Icon } from '@/components/ui/Icon/Icon';
import { Input } from '@/components/ui/Input/Input';
import { Label } from '@/components/ui/Label/Label';
import useToast from '@/hooks/useToast';

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

	const [profileImage, setProfileImage] = React.useState('');

	const { handleSubmit, register, control, setValue } = useForm<ProfileFormProps>({
		defaultValues: {
			profileImage: '',
			profileName: '',
			kidProfile: false,
		},
	});

	const onSubmit = () => {
		try {
			// save data
		} catch {
			showErrorToast('Ocorreu um erro, e não foi possivel salvar o perfil');
		}
	};

	React.useEffect(() => {
		setProfileImage(randonProfileImage());
		setValue('profileImage', profileImage);
	}, []);

	return (
		<form
			className="max-w-400 flex w-full flex-col gap-20"
			onSubmit={handleSubmit(onSubmit)}
		>
			<div className="flex h-100 gap-20">
				<div className="relative h-100 w-100 overflow-hidden rounded-sm hover:cursor-pointer">
					<img
						src={profileImage}
						alt="profile"
						className="h-full w-full rounded-sm object-cover"
					/>
					<div className="absolute top-0 z-30 flex h-full w-full items-center justify-center bg-black/80 transition-all duration-200 hover:bg-black/90">
						<Icon
							size="lg"
							name="images"
							className="text-neutral-200"
						/>
					</div>
				</div>
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
			<div className="w-full py-20">
				<Button
					variant="primary"
					size="lg"
					className="px-40"
				>
					Salvar
				</Button>
			</div>
		</form>
	);
};

export default ProfileForm;
