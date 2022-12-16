import Link from 'next/link';
import BlobBackground from '../components/blobBackground/BlobBackground';
import Layout from '../components/layout/Layout';
import styles from '../styles/404.module.scss';

export default function Custom404() {
	return (
		<Layout title='404 - Page not found' inner>
			<BlobBackground>
				<div className={styles.content}>
					<h1>404 - Page not found</h1>
					<Link href='/'>
						<button className={styles.button}>Take me home</button>
					</Link>
				</div>
			</BlobBackground>
		</Layout>
	);
}
