import { type ToastOptions, toast } from 'react-toastify';

import { Icon } from '@/components/ui/Icon/Icon';

const defaultOptions: ToastOptions = {
	position: 'top-right',
	autoClose: 5000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
	style: {
		fontSize: 14,
	},
	icon: ({ type }) => {
		switch (type) {
			case 'info':
				return <Icon size="lg" name="badge-alert" className="text-blue-500" />;
			case 'error':
				return <Icon size="lg" name="circle-x" className="text-error-500" />;
			case 'success':
				return <Icon size="lg" name="circle-check" className="text-success-500" />;
			case 'warning':
				return <Icon size="lg" name="circle-alert" className="text-warning-500" />;
			default:
				return null;
		}
	},
};

export const showSuccessToast = (message: string, options?: ToastOptions) => {
	toast.success(message, { ...defaultOptions, ...options });
};

export const showErrorToast = (message: string, options?: ToastOptions) => {
	toast.error(message, { ...defaultOptions, ...options });
};

export const showWarningToast = (message: string, options?: ToastOptions) => {
	toast.warning(message, { ...defaultOptions, ...options });
};

export const showInfoToast = (message: string, options?: ToastOptions) => {
	toast.info(message, { ...defaultOptions, ...options });
};
