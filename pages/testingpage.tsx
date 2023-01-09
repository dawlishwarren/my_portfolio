import { NextPage } from 'next';
import Layout from '../components/layout/Layout';
import styles from '../styles/Home.module.scss';

// Scroll X Progress on a container

const TestingPage: NextPage = () => {
	return (
		<Layout title='Alex Warren | Frontend Developer' inner={false}>
			<h1>Hello World</h1>
		</Layout>
	);
};

export default TestingPage;
