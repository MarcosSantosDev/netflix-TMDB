import * as React from 'react';

import Loading from '../Loading/Loading';

const Suspense = ({ children }: React.PropsWithChildren) => {
	return <React.Suspense fallback={<Loading />}>{children}</React.Suspense>;
};

export default Suspense;
