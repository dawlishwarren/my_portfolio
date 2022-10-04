import Head from "next/head";
import { ReactNode } from "react";
import Footer from "../footer/Footer";
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
				<div className="container">{children}</div>
			) : (
				// if inner page
				<>
					<nav className={styles.navbar}>Navbar</nav>
					<div className={styles.inner_container}>{children}</div>
				</>
			)}
			<Footer />
		</>
	);
};

export default Layout;
