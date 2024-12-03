import { Navigate } from 'react-router-dom';

import { useAuth } from '@/features/auth/hooks/useAuth';
import routePaths from '@/router/config/routePaths';

const PublicLayout = ({ children }: React.PropsWithChildren) => {
	const { isAuthenticated } = useAuth();

	if (isAuthenticated) {
		return (
			<Navigate
				to={routePaths.PROFILES}
				replace={true}
			/>
		);
	}

	return children;
};

export default PublicLayout;
