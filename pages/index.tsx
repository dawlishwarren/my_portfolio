// React/Next/NPM
import type { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
// Components
import Main from "../components/main/Main";
import Layout from "../components/layout/Layout";
import Blog from "../components/blog/Blog";
const AboutMe = dynamic(() => import("../components/aboutMe/AboutMe"), {
	suspense: false,
});
const Skills = dynamic(() => import("../components/skills/Skills"), {
	suspense: false,
});
const Portfolio = dynamic(() => import("../components/portfolio/Portfolio"), {
	suspense: false,
});
const Contact = dynamic(() => import("../components/contact/Contact"), {
	suspense: false,
});

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<meta name="description" content="Generated by create next app" />
			</Head>
			<Layout title="Alex Warren | Frontend Developer" inner={false}>
				<Main />
				<AboutMe />
				<Skills />
				<Portfolio />
				<Contact />
				<Blog />
			</Layout>
		</>
	);
};

export default Home;
