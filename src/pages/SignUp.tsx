import { SEO } from '@/components/app';
import AuthFormWrapper from '@/features/auth/components/AuthFormWrapper';
import SignUpForm from '@/features/auth/components/SignUpForm/SignUpForm';
import PublicLayout from '@/layouts/PublicLayout/PublicLayout';
import routePaths from '@/router/config/routePaths';

const SignUp = () => (
	<PublicLayout>
		<SEO
			resource={{
				title: 'Crie sua Conta na [Nome do Site] | Cadastro Fácil e Rápido',
				shortDescription:
					'Junte-se à [Nome do Site] e descubra uma experiência personalizada. Cadastre-se de forma rápida e fácil, com segurança garantida.',
			}}
		/>
		<AuthFormWrapper
			title="Get Started Now"
			subTitleDescription="Already have an account ?"
			subTitleLink={{
				text: 'Sign In',
				to: routePaths.ROOT_SIGN_IN,
			}}
		>
			<SignUpForm />
		</AuthFormWrapper>
	</PublicLayout>
);

export default SignUp;
