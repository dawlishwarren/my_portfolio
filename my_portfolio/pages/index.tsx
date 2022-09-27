import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Main from '../components/main/Main';
import Layout from '../components/layout/Layout';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<meta name='description' content='Generated by create next app' />
			</Head>
			<Layout title='Alex Warren | Frontend Developer' home>
				<Main />
				{/* About */}

				{/* Skills */}

				{/* Portfolio */}

				{/* Blog */}

				{/* Contact */}
			</Layout>
		</>
	);
};

export default Home;
