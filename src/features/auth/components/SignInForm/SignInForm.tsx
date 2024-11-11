import { zodResolver } from '@hookform/resolvers/zod';

import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Input, Button, Label } from '@/components/ui';
import * as Form from '@/components/ui/form';
import { PasswordInput } from '@/components/ui/PasswordInput/PasswordInput';

import { useAuth } from '../../hooks/useAuth';
import { AuthSignInPayload } from '../../types/auth.types';

const schema = z.object({
	email: z.string().min(1, 'Informe seu email.').email('Informe um email valido'),
	password: z.string().min(1, 'Informe sua senha.').min(4, 'Senha muito curta - deve conter no mínimo 4 letras.'),
});

type SignInFormData = AuthSignInPayload;

const SignInForm = () => {
	const form = useForm<SignInFormData>({
		mode: 'onSubmit',
		defaultValues: {
			email: '',
			password: '',
			remember: false,
		},
		resolver: zodResolver(schema),
	});

	const { signIn, isLoading } = useAuth();

	const onSubmit = (credentials: SignInFormData) => {
		signIn(credentials);
	};

	return (
		<form
			onSubmit={form.handleSubmit(onSubmit)}
			className="flex flex-col gap-20"
			autoComplete="off"
		>
			<div className="grid grid-cols-1 space-y-6">
				<Form.FormFieldContent>
					<Label htmlFor="email">E-mail</Label>
					<Input
						{...form.register('email')}
						id="email"
						type="text"
						placeholder="E-mail"
					/>
					<Form.FormMessage error={form.formState.errors.email} />
				</Form.FormFieldContent>
				<Form.FormFieldContent>
					<Label htmlFor="password">Senha</Label>
					<PasswordInput
						{...form.register('password')}
						id="password"
						placeholder="*******"
					/>
					<Form.FormMessage error={form.formState.errors.password} />
				</Form.FormFieldContent>
			</div>
			<Button
				type="submit"
				disabled={isLoading}
			>
				Entrar
			</Button>
		</form>
	);
};

export default SignInForm;
