import type { KeyboardEvent, MouseEvent } from 'react';

interface UseAccessibleClickOptions {
	onClick: () => void;
	role?: string;
}

export const useAccessibleClick = ({ onClick, role = 'button' }: UseAccessibleClickOptions) => {
	const handleKey = (event: KeyboardEvent) => {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			onClick();
		}
	};

	return {
		onClick,
		onKeyUp: handleKey,
		tabIndex: 0,
		role,
	};
};
