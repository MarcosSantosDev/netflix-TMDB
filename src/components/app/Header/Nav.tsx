import { PropsWithChildren } from 'react';

import clsx from 'clsx';

import { Icon } from '@/components/ui/Icon/Icon';
import { IconButton } from '@/components/ui/IconButton/IconButton';

type NavLinkProps = PropsWithChildren & {
	active?: boolean;
	className?: string;
};

const NavLink = ({ children, active = false, className = '' }: NavLinkProps) => (
	<button
		aria-current={active ? 'page' : undefined}
		data-active={active}
		className={clsx(
			'text-nowrap text-sm text-neutral-1 md:text-md',
			{
				'font-bold': active,
			},
			className
		)}
	>
		{children}
	</button>
);

type NavProps = {
	className?: string;
};

export const Nav = ({ className }: NavProps) => {
	return (
		<div
			className={className}
			data-testid="Nav"
		>
			<IconButton
				aria-label="Menu"
				className="md:hidden"
				variant="ghost"
			>
				<Icon
					name="menu"
					size="lg"
				/>
			</IconButton>

			<nav className="hidden h-24 items-center gap-24 rounded-full md:flex">
				<NavLink active>Inicio</NavLink>
				<NavLink>Tv Shows</NavLink>
				<NavLink>Filmes</NavLink>
				<NavLink>Em alta</NavLink>
				<NavLink>Minha Lista</NavLink>
			</nav>
		</div>
	);
};
