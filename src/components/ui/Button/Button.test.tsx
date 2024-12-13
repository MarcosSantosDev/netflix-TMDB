import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { vi } from 'vitest';

import { Button } from './Button';

describe('Button Component', () => {
	it('should render in the document', () => {
		render(<Button>Click Me</Button>);

		const button = screen.getByRole('button', { name: /click me/i });
		expect(button).toBeInTheDocument();
	});

	it('should render the button with variant primary classes', () => {
		render(<Button>Click Me</Button>);

		const button = screen.getByRole('button', { name: /click me/i });
		expect(button).toHaveClass('bg-red text-neutral-1 shadow hover:bg-red/90');
	});

	it('should render the button by variant secondary classes', () => {
		render(<Button variant="secondary">Click Me</Button>);

		const button = screen.getByRole('button', { name: /click me/i });
		expect(button).toHaveClass('bg-neutral-600 text-neutral-50 shadow hover:bg-neutral-900/90');
	});

	it('should render the button by variant tertiary classes', () => {
		render(<Button variant="tertiary">Click Me</Button>);

		const button = screen.getByRole('button', { name: /click me/i });
		expect(button).toHaveClass('bg-neutral-1 text-black shadow hover:bg-neutral-100');
	});

	it('should render the button by variant link classes', () => {
		render(<Button variant="link">Click Me</Button>);

		const button = screen.getByRole('button', { name: /click me/i });
		expect(button).toHaveClass('text-neutral-50 underline-offset-4 hover:underline');
	});

	it('should render default size with "md" classes', () => {
		render(<Button>Click Me</Button>);

		const button = screen.getByRole('button', { name: /click me/i });
		expect(button).toHaveClass('h-40 px-3');
	});

	it('should render the button with size "lg"', () => {
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
