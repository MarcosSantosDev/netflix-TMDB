import { motion } from 'framer-motion';
import { Navigate, useLocation } from 'react-router-dom';

import { useAuth } from '@/features/auth/hooks/useAuth';
import routePaths from '@/router/config/routePaths';

import authBgPage from '/assets/images/backgrounds/auth-page.svg';

const LogoImg = () => {
	return (
		<motion.img
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			src={authBgPage}
			alt="Illustration of a man sitting in a chair in front of a computer"
			className="w-4/5"
		/>
	);
};

const PublicLayout = ({ children }: React.PropsWithChildren) => {
	const location = useLocation();
	const { isAuthenticated } = useAuth();

	if (isAuthenticated) {
		return (
			<Navigate
				to={routePaths.ROOT}
				replace={true}
			/>
		);
	}

	return (
		<motion.div
			key={location.pathname}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="flex h-screen max-h-full w-screen max-w-full items-center justify-center"
		>
			<div className="flex h-full w-full items-center justify-center md:w-1/2">{children}</div>
			<div className="hidden h-full w-1/2 flex-col items-center justify-center bg-primary-50 md:flex">
				<LogoImg />
			</div>
		</motion.div>
	);
};

export default PublicLayout;
