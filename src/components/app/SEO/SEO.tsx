import { Helmet } from 'react-helmet-async';

type SEOProps = {
	resource: {
		title: string;
		shortDescription: string;
	};
};

const SEO = ({ resource }: SEOProps) => {
	return (
		<Helmet>
			<title>{resource.title}</title>
			<meta
				property="og:type"
				content="website"
			/>
			<meta
				property="og:title"
				content={resource.title}
			/>
			<meta
				property="og:description"
				content={resource.shortDescription}
			/>
			<meta
				property="og:url"
				content={window.location.href}
			/>

			<meta
				property="twitter:title"
				content={resource.title}
			/>
			<meta
				property="twitter:description"
				content={resource.shortDescription}
			/>
			<meta
				property="twitter:url"
				content={window.location.href}
			/>
		</Helmet>
	);
};

export default SEO;
