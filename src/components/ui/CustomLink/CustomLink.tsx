import { Link as RouterLink } from 'react-router-dom';

import { cn } from '@/utils/twUtils';

type CustomLinkProps = {
	to: string;
	children: React.ReactNode;
	className?: string;
};

export const CustomLink = ({ to, children, className }: CustomLinkProps) => {
	return (
		<RouterLink
			to={to}
			className={cn(
				'text-primary-300 no-underline outline-none transition-all duration-300 ease-in-out hover:underline focus:underline',
				className
			)}
		>
			{children}
		</RouterLink>
	);
};
