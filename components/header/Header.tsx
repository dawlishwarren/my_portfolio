// React/Next/NPM
import React from "react";
// Components
import Navbar from "../navigation/Navbar";
import Socials from "../socials/Socials";
// Styles/Assets
import styles from "./header.module.scss";

const Header = () => {
	// Socials Dropdown

	return (
		<header className={styles.header}>
			<Navbar />
			<Socials />
		</header>
	);
};

export default Header;
