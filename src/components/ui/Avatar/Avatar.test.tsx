import { render, screen } from '@testing-library/react';

import { Avatar, AvatarFallback } from './Avatar';

describe('Avatar Component', () => {
	it('should render the Avatar component correctly', () => {
		render(<Avatar data-testid="avatar" />);
		const avatar = screen.getByTestId('avatar');
		expect(avatar).toBeInTheDocument();
		expect(avatar).toHaveClass('relative flex h-40 w-40 shrink-0 overflow-hidden rounded-sm');
	});

	it('should render the AvatarFallback inside the Avatar when the image fails', () => {
		render(
			<Avatar>
				<AvatarFallback data-testid="avatar-fallback">AB</AvatarFallback>
			</Avatar>
		);
		const avatarFallback = screen.getByTestId('avatar-fallback');
		expect(avatarFallback).toBeInTheDocument();
		expect(avatarFallback).toHaveTextContent('AB');
		expect(avatarFallback).toHaveClass('flex h-full w-full items-center justify-center rounded-sm bg-neutral-100');
	});

	it('should apply additional classes to the Avatar via className', () => {
		render(
			<Avatar
				className="custom-class"
				data-testid="avatar"
			/>
		);
		const avatar = screen.getByTestId('avatar');
		expect(avatar).toHaveClass('custom-class');
	});
});
