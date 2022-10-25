// React/Next/NPM
import { ReactNode } from "react";
import Head from "next/head";
// Components
import Header from "../header/Header";
import Footer from "../footer/Footer";
// Styles/Assets
import styles from "./layout.module.scss";

type Props = {
	home?: boolean;
	children?: ReactNode;
	title: string;
};

const Layout = ({ home, children, title }: Props) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			{/* If index page */}
			{home ? (
				<div className="container">
					<Header />
					{children}
				</div>
			) : (
				// if inner page
				<>
					<div className={styles.inner_container}>{children}</div>
				</>
			)}
			<Footer />
		</>
	);
};

export default Layout;
