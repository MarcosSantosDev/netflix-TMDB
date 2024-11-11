import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Input } from './Input';

describe('Input Component', () => {
	it('should render the input element', () => {
		render(<Input type="text" />);

		const input = screen.getByRole('textbox');
		expect(input).toBeInTheDocument();
	});

	it('should apply additional className', () => {
		render(
			<Input
				type="text"
				className="custom-class"
			/>
		);

		const input = screen.getByRole('textbox');
		expect(input).toHaveClass('custom-class');
	});

	it('should allow typing in the input field', async () => {
		render(<Input type="text" />);

		const input = screen.getByRole('textbox');
		await userEvent.type(input, 'White on input');

		expect(input).toHaveValue('White on input');
	});

	it('should forward the ref correctly', () => {
		const ref = React.createRef<HTMLInputElement>();
		render(
			<Input
				type="text"
				ref={ref}
			/>
		);

		expect(ref.current).toBeInstanceOf(HTMLInputElement);
	});

	it('should handle disabled state', () => {
		render(
			<Input
				type="text"
				disabled
			/>
		);

		const input = screen.getByRole('textbox');
		expect(input).toBeDisabled();
	});

	it('should render input type correctly', () => {
		const { rerender } = render(
			<Input
				data-testid="input-type-email"
				type="email"
			/>
		);

		const inputTypeEmail = screen.getByTestId('input-type-email');
		expect(inputTypeEmail).toHaveAttribute('type', 'email');

		rerender(
			<Input
				data-testid="input-type-password"
				type="password"
			/>
		);

		const inputTypePassword = screen.getByTestId('input-type-password');
		expect(inputTypePassword).toHaveAttribute('type', 'password');
	});
});
