import type { NextPage } from "next";
import Head from "next/head";
import Main from "../components/main/Main";
import Layout from "../components/layout/Layout";
import AboutMe from "../components/aboutMe/AboutMe";
import Skills from "../components/skills/Skills";
import Portfolio from "../components/portfolio/Portfolio";
import Blog from "../components/blog/Blog";
import Contact from "../components/contact/Contact";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<meta name="description" content="Generated by create next app" />
			</Head>
			<Layout title="Alex Warren | Frontend Developer" home>
				<Main />
				{/* About */}
				<AboutMe />
				{/* Skills */}
				<Skills />
				{/* Portfolio */}
				<Portfolio />
				{/* Blog */}
				<Blog />
				{/* Contact */}
				<Contact />
			</Layout>
		</>
	);
};

export default Home;