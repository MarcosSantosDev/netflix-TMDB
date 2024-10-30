import { render } from '@testing-library/react';

import { Label } from './Label'; // O caminho pode variar

describe('Label component', () => {
	it('should render the label correctly', () => {
		const { getByText } = render(<Label>Test Label</Label>);
		expect(getByText('Test Label')).toBeInTheDocument();
	});

	it('should apply default classes', () => {
		const { container } = render(<Label>Test Label</Label>);
		const labelElement = container.firstChild;
		expect(labelElement).toHaveClass('text-sm font-medium leading-none');
	});

	it('should apply custom className', () => {
		const { container } = render(<Label className="custom-class">Test Label</Label>);
		const labelElement = container.firstChild;
		expect(labelElement).toHaveClass('custom-class');
	});

	it('should support disabled state via peer', () => {
		const { container } = render(
			<Label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Disabled Label</Label>
		);
		const labelElement = container.firstChild;
		expect(labelElement).toHaveClass('peer-disabled:cursor-not-allowed');
		expect(labelElement).toHaveClass('peer-disabled:opacity-70');
	});
});
