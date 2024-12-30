import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithQueryClient } from '@/utils/RTL';

import SignInForm from '../components/SignInForm/SignInForm';

describe('SignInForm', () => {
	it('should render the form correctly', () => {
		renderWithQueryClient(<SignInForm />);

		const form = screen.getByRole('form');
		const emailInput = screen.getByLabelText(/e-mail/i);
		const passwordInput = screen.getByLabelText(/senha/i);
		const submitButton = screen.getByRole('button', { name: /entrar/i });

		expect(form).toBeInTheDocument();
		expect(form).toContainElement(emailInput);
		expect(form).toContainElement(passwordInput);
		expect(form).toContainElement(submitButton);
		expect(emailInput).toBeInTheDocument();
		expect(passwordInput).toBeInTheDocument();
		expect(submitButton).toBeInTheDocument();
	});

	it('should render the form errors when fields are not filled in', async () => {
		renderWithQueryClient(<SignInForm />);

		const form = screen.getByRole('form');

		const submitButton = screen.getByRole('button', { name: /entrar/i });
		await userEvent.click(submitButton);

		const emailError = await screen.findByText(/Informe seu email./i);
		const passwordError = await screen.findByText(/Informe sua senha./i);

		expect(form).toContainElement(emailError);
		expect(form).toContainElement(passwordError);
	});

	it('should render the form errors when email is invalid', async () => {
		renderWithQueryClient(<SignInForm />);

		const form = screen.getByRole('form');

		const emailInput = screen.getByLabelText(/e-mail/i);
		const passwordInput = screen.getByLabelText(/senha/i);
		const submitButton = screen.getByRole('button', { name: /entrar/i });

		userEvent.type(emailInput, 'invalid-email');
		userEvent.type(passwordInput, '1234');

		await userEvent.click(submitButton);

		const emailError = await screen.findByText(/Informe um email valido/i);

		expect(form).toContainElement(emailError);
	});
});
