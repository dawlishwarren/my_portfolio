// React/Next/NPM
import React from 'react';
// Components
import Navbar from '../siteNavigation/Navbar';
import Socials from '../socialsNavigation/SocialsNav';
// Styles/Assets
import styles from './header.module.scss';

const Header = () => {
	return (
		<header className={styles.header}>
			<Navbar />
			<Socials />
		</header>
	);
};

export default Header;
