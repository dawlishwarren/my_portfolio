// React/Next/NPM
import { ReactNode } from 'react';
import Head from 'next/head';
// Components
import Header from '../header/Header';
import Footer from '../footer/Footer';
// Prop types
type Props = {
	children?: ReactNode;
	title: string;
};

const Layout = ({ children, title }: Props) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta charSet='utf-8' />
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<div className='container'>
				<Header />
				{children}
			</div>
			<Footer />
		</>
	);
};

export default Layout;
