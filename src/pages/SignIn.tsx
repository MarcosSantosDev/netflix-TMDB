import { SEO } from '@/components/app';
import { Header } from '@/components/app';
import { Button } from '@/components/ui';
import { Checkbox } from '@/components/ui/Checkbox';
import SignInForm from '@/features/auth/components/SignInForm/SignInForm';
import PublicLayout from '@/layouts/PublicLayout';

const SignInPage = () => {
	const onLoginWithAccessCode = () => {
		// Lógica de login com Google
	};

	return (
		<PublicLayout>
			<SEO
				resource={{
					title: 'Netflix | Acesse Sua Conta Agora',
					shortDescription:
						'Acesse sua conta na Netflix e aproveite todos os nossos recursos exclusivos. Faça login de forma rápida e segura para continuar explorando.',
				}}
			/>

			<div className="relative h-screen w-screen">
				<div className="absolute -z-10 hidden min-h-screen w-full overflow-hidden bg-netflix-thumb bg-cover bg-no-repeat md:block" />
				<div className="h-full w-full bg-black md:bg-backdrop">
					<Header />
					<div className="m-20 h-auto max-h-[600px] max-w-full space-y-20 self-end rounded-sm bg-black/80 md:mx-auto md:my-28 md:max-w-[450px] md:p-48">
						<div className="grid grid-cols-1 gap-10">
							<h2 className="text-nowrap text-xxl font-bold text-neutral-1">Entrar</h2>
						</div>
						<div>
							<SignInForm />
						</div>
						<div className="flex flex-col gap-8">
							<div className="flex items-center justify-around gap-2">
								<span className="mx-4 whitespace-nowrap text-md text-neutral-300">OU</span>
							</div>
							<Button
								variant="secondary"
								onClick={onLoginWithAccessCode}
							>
								Usar um código de acesso
							</Button>
							<Button
								variant="link"
								onClick={onLoginWithAccessCode}
							>
								Esqueceu a senha ?
							</Button>
						</div>
						<div>
							<div className="flex items-center space-x-10">
								<Checkbox id="terms" />
								<label
									htmlFor="terms"
									className="text-md font-medium leading-none text-neutral-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
								>
									Lembre-se de mim
								</label>
							</div>
						</div>
					</div>
				</div>
			</div>
		</PublicLayout>
	);
};

export default SignInPage;
