// React/Next/NPM
import { ReactNode } from 'react';
import Head from 'next/head';
// Components
import Header from '../header/Header';
import Footer from '../footer/Footer';
// Styles/assets
import styles from './layout.module.scss';
// Prop types
type Props = {
	children?: ReactNode;
	title: string;
	inner: boolean;
};

const Layout = ({ children, title, inner }: Props) => {
	return (
		<>
			<div className={styles.container}>
				<Head>
					<title>{title}</title>
					<meta charSet='utf-8' />
					<meta
						name='viewport'
						content='initial-scale=1.0, width=device-width'
					/>
				</Head>
				<div className='container'>
					{!inner && <Header />}
					{children}
					<Footer />
				</div>
			</div>
		</>
	);
};

export default Layout;
