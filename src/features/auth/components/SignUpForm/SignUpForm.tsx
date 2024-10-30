import { zodResolver } from '@hookform/resolvers/zod';

import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Input, Button, Form } from '@/components/ui';
import { PasswordInput } from '@/components/ui/PasswordInput/PasswordInput';

import { AuthSignUpPayload } from '../../types/auth.types';

const schema = z.object({
	userName: z.string().min(1, 'Informe seu usuário'),
	email: z.string().min(1, 'Informe o seu email').email('Informe um email válido'),
	password: z.string().min(1, 'Informe sua senha').min(4, 'Senha muito curta - deve conter no mínimo 4 letras.'),
});

type SignUpFormData = AuthSignUpPayload;

const SignUpForm = () => {
	const form = useForm<SignUpFormData>({
		mode: 'onSubmit',
		defaultValues: {
			userName: '',
			email: '',
			password: '',
			confirmation_password: '',
		},
		resolver: zodResolver(schema),
	});

	const onSubmit = () => {
		//
	};

	return (
		<Form.Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex w-full flex-col gap-6"
				autoComplete="off"
			>
				<div className="grid grid-cols-1 space-y-6">
					<Form.FormField
						control={form.control}
						name="userName"
						render={({ field }) => (
							<Form.FormItem>
								<Form.FormLabel>Usuário</Form.FormLabel>
								<Form.FormControl>
									<Input
										{...field}
										type="text"
										placeholder="Usuário"
									/>
								</Form.FormControl>
								<Form.FormMessage />
							</Form.FormItem>
						)}
					/>
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
					<Form.FormField
						control={form.control}
						name="confirmation_password"
						render={({ field }) => (
							<Form.FormItem>
								<Form.FormLabel>Confirmar senha</Form.FormLabel>
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
				<Button type="submit">Sign Up</Button>
			</form>
		</Form.Form>
	);
};

export default SignUpForm;
