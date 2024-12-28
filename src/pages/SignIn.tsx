import { Header } from '@/components/app/Header/Header';
import { SEO } from '@/components/app/SEO/SEO';
import { Button } from '@/components/ui/Button/Button';
import { Checkbox } from '@/components/ui/Checkbox';
import SignInForm from '@/features/auth/components/SignInForm/SignInForm';
import PublicLayout from '@/layouts/PublicLayout';

const SignInPage = () => {
	const onLoginWithAccessCode = () => {
		// Login With Access Code
	};

	return (
		<PublicLayout>
			<SEO
				resource={{
					title: 'Netflix',
					shortDescription: 'Acesse sua conta na Netflix',
				}}
			/>

			<div className="relative h-screen w-screen">
				<div className="absolute -z-10 hidden min-h-screen w-full overflow-hidden bg-netflix-thumb bg-cover bg-no-repeat md:block" />
				<div className="flex h-full w-full bg-black md:bg-backdrop">
					<Header className="absolute left-0 right-0 top-0" />
					<div className="h-auto w-full space-y-20 overflow-y-auto rounded-sm p-20 pt-80 md:m-auto md:max-w-[450px] md:bg-black/80 md:p-20">
						<h2 className="text-nowrap text-xl font-bold text-neutral-1 md:text-xxl">Entrar</h2>
						<SignInForm />
						<div className="flex flex-col gap-6">
							<span className="mx-4 whitespace-nowrap text-center text-md text-neutral-300">OU</span>
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
