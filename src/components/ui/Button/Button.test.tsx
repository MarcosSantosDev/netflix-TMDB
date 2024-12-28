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

	it('should render with an icon if passed', async () => {
		render(<Button icon="check">Button with icon</Button>);

		const button = screen.getByRole('button', { name: /button with icon/i });
		const icon = await screen.findByRole('svgicon');
		expect(button).toBeInTheDocument();
		expect(button).toContainElement(icon);
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
		expect(button).toHaveClass('disabled:pointer-events-none', 'disabled:opacity-50');
	});

	it('should render as a different element when asChild is true', () => {
		render(
			<Button asChild>
				<a href="/link">I'm a link</a>
			</Button>
		);

		const link = screen.getByRole('link', { name: /I'm a link/i });
		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute('href', '/link');
	});
});
