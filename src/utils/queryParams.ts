type QueryObject = {
	[key: string]: string | number | boolean | null | undefined;
};

export const generateQueryParams = (objects: QueryObject[]): string => {
	const params = objects
		.flatMap((obj) =>
			Object.entries(obj)
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
				.filter(([_, value]) => value !== null && value !== undefined)
				.map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
		)
		.join('&');

	return params ? `?${params}` : '';
};
