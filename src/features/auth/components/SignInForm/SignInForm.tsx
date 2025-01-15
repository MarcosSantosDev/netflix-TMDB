import { zodResolver } from '@hookform/resolvers/zod';

import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/Button/Button';
import * as Form from '@/components/ui/Form';
import { Input } from '@/components/ui/Input/Input';
import { Label } from '@/components/ui/Label/Label';
import { PasswordInput } from '@/components/ui/PasswordInput/PasswordInput';
import { useAuth } from '@/features/auth/hooks/useAuth';

const schema = z.object({
	email: z.string().min(1, 'Informe seu email.').email('Informe um email valido'),
	password: z.string().min(1, 'Informe sua senha.'),
});

type SignInFormData = {
	email: string;
	password: string;
};

const SignInForm = () => {
	const form = useForm<SignInFormData>({
		mode: 'onSubmit',
		defaultValues: {
			email: '',
			password: '',
		},
		resolver: zodResolver(schema),
	});

	const { signIn, isLoadingSignIn } = useAuth();

	const onSubmit = (credentials: SignInFormData) => {
		signIn(credentials);
	};

	return (
		<form
			onSubmit={form.handleSubmit(onSubmit)}
			className="flex flex-col gap-20"
			autoComplete="off"
			data-testid="signIn"
		>
			<div className="grid grid-cols-1 space-y-6">
				<Form.FormFieldContent>
					<Label htmlFor="email">E-mail</Label>
					<Input {...form.register('email')} id="email" type="text" placeholder="E-mail" />
					<Form.FormMessage error={form.formState.errors.email} />
				</Form.FormFieldContent>
				<Form.FormFieldContent>
					<Label htmlFor="password">Senha</Label>
					<PasswordInput {...form.register('password')} id="password" placeholder="*******" />
					<Form.FormMessage error={form.formState.errors.password} />
				</Form.FormFieldContent>
			</div>
			<Button type="submit" disabled={isLoadingSignIn}>
				Entrar
			</Button>
		</form>
	);
};

export default SignInForm;
