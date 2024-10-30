import { zodResolver } from '@hookform/resolvers/zod';

import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Input, Button, Form } from '@/components/ui';
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
		<Form.Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex flex-col gap-16"
				autoComplete="off"
			>
				<div className="grid grid-cols-1 space-y-6">
					<Form.FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<Form.FormItem>
								<Form.FormLabel>E-mail</Form.FormLabel>
								<Form.FormControl>
									<Input
										{...field}
										type="text"
										placeholder="E-mail"
									/>
								</Form.FormControl>
								<Form.FormMessage />
							</Form.FormItem>
						)}
					/>
					<Form.FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<Form.FormItem>
								<Form.FormLabel>Senha</Form.FormLabel>
								<Form.FormControl>
									<PasswordInput
										{...field}
										placeholder="*******"
									/>
								</Form.FormControl>
								<Form.FormMessage />
							</Form.FormItem>
						)}
					/>
				</div>
				<Button
					type="submit"
					disabled={isLoading}
				>
					Sign In
				</Button>
			</form>
		</Form.Form>
	);
};

export default SignInForm;
