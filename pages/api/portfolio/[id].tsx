import Layout from '../../../components/layout/Layout';
import { portfolioData } from '../../../data/portfolioData';
export default function PortfolioPage() {
	return (
		<Layout title='Post' inner>
			...
		</Layout>
	);
}
export async function getStaticPaths() {
	return {
		paths: [
			portfolioData.map((slide, index) => {
				params: {
					id: 'index';
				}
			}),
		],
	};
}
