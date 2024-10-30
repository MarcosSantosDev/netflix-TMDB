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

	it('should not display error message when error prop is undefined', () => {
		render(<Input type="text" />);

		const errorElement = screen.queryByText(/This field is required/i);
		expect(errorElement).not.toBeInTheDocument();
	});

	it('should allow typing in the input field', async () => {
		render(<Input type="text" />);

		const input = screen.getByRole('textbox');
		await userEvent.type(input, 'React Testing');

		expect(input).toHaveValue('React Testing');
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

	it('should render input of type password correctly', () => {
		render(
			<Input
				type="password"
				placeholder="password"
			/>
		);

		const input = screen.getByPlaceholderText('password');
		expect(input).toHaveAttribute('type', 'password');
	});
});
