// React/Next/NPM
import Link from 'next/link';
// Components
import BlobBackground from '../components/blobBackground/BlobBackground';
import HomeButton from '../components/homeButton/HomeButton';
import Layout from '../components/layout/Layout';
// Styles/Assets
import styles from '../styles/404.module.scss';

export default function Custom404() {
	return (
		<Layout title='404 - Page not found' inner>
			<BlobBackground>
				<div className={styles.content}>
					<h1>404 - Page not found</h1>
					<HomeButton />
				</div>
			</BlobBackground>
		</Layout>
	);
}
