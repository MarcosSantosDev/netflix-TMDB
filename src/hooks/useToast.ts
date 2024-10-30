import { showSuccessToast, showErrorToast, showWarningToast, showInfoToast } from '@/libs/react-toastify';

const useToast = () => {
	return {
		showSuccessToast,
		showErrorToast,
		showWarningToast,
		showInfoToast,
	};
};

export default useToast;
