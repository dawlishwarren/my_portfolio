import { NextPage } from 'next';
import AboutMe from '../components/aboutMe/AboutMe';
import Header from '../components/header/Header';
import Layout from '../components/layout/Layout';
import Skills from '../components/skills/Skills';

const TestingPage: NextPage = () => {
	return (
		<Layout title='Alex Warren | Frontend Developer' home>
			<Header />
			<AboutMe />
			<Skills />
		</Layout>
	);
};

export default TestingPage;
