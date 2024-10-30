import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { vi } from 'vitest';

import { Button } from './Button';

describe('Button Component', () => {
	it('should render the button with default props', () => {
		render(<Button>Click Me</Button>);

		const button = screen.getByRole('button', { name: /click me/i });
		expect(button).toBeInTheDocument();
		expect(button).toHaveClass('bg-primary-400');
	});

	it('should apply the primary variant by default', () => {
		render(<Button>Click Me</Button>);

		const button = screen.getByRole('button', { name: /click me/i });
		expect(button).toHaveClass('bg-primary-400');
	});

	it('should render with secondary variant when passed', () => {
		render(<Button variant="secondary">Click Me</Button>);

		const button = screen.getByRole('button', { name: /click me/i });
		expect(button).toHaveClass('bg-neutral-900');
	});

	it('should render with the outline variant', () => {
		render(<Button variant="outline">Click Me</Button>);

		const button = screen.getByRole('button', { name: /click me/i });
		expect(button).toHaveClass('border-neutral-200 bg-white');
	});

	it('should render with size lg', () => {
		render(<Button size="lg">Click Me</Button>);

		const button = screen.getByRole('button', { name: /click me/i });
		expect(button).toHaveClass('h-48 px-8');
	});

	it('should render with an icon if passed', async () => {
		render(<Button icon="check">Click Me</Button>);

		const button = screen.getByRole('button', { name: /click me/i });
		const icon = await screen.findByRole('svgicon');
		expect(button).toBeInTheDocument();
		expect(icon).toBeInTheDocument();
	});

	it('should trigger onClick when clicked', async () => {
		const handleClick = vi.fn();
		render(<Button onClick={handleClick}>Click Me</Button>);

		const button = screen.getByRole('button', { name: /click me/i });
		await userEvent.click(button);

		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it('should be disabled when disabled prop is passed', () => {
		render(<Button disabled>Click Me</Button>);

		const button = screen.getByRole('button', { name: /click me/i });
		expect(button).toBeDisabled();
		expect(button).toHaveClass('disabled:opacity-50 ');
	});

	it('should render as a different element when asChild is true', () => {
		render(
			<Button asChild>
				<a href="/link">Click Me</a>
			</Button>
		);

		const link = screen.getByRole('link', { name: /click me/i });
		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute('href', '/link');
	});
});
