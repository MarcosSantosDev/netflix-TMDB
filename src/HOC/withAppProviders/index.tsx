import AppProviders from './AppProviders';

const withAppProviders = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
	const WithAppProviders = (props: P) => (
		<AppProviders>
			<WrappedComponent {...props} />
		</AppProviders>
	);

	return WithAppProviders;
};

export default withAppProviders;
