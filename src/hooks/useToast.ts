import { showErrorToast, showInfoToast, showSuccessToast, showWarningToast } from '@/libs/react-toastify';

const useToast = () => {
	return {
		showSuccessToast,
		showErrorToast,
		showWarningToast,
		showInfoToast,
	};
};

export default useToast;
