import styles from './navbar.module.scss';
import Link from 'next/link';
import Socials from '../socials/Socials';

import { Divide as Hamburger } from 'hamburger-react';
import { VscColorMode } from 'react-icons/vsc';
import { CgArrowsScrollV } from 'react-icons/cg';
import { IoPersonAddSharp } from 'react-icons/io5';
import { useState } from 'react';
import ColorBurn from '../colorBurn/ColorBurn';

const Navbar = () => {
	// Navbar Functionality
	// Open States
	const [navIsOpen, setNavIsOpen] = useState(false);
	const [socialsDropdownIsOpen, setSocialsDropdownIsOpen] = useState(false);

	// Navigation Menu
	const toggleNavIsOpen = () => {
		setNavIsOpen(!navIsOpen);
		clearIsOpens();
	};
	// Socials Dropdown
	const toggleSocialsIsOpen = () => {
		setSocialsDropdownIsOpen(!socialsDropdownIsOpen);
	};
	// Clear when Navigation is open
	const clearIsOpens = () => {
		if (socialsDropdownIsOpen) setSocialsDropdownIsOpen(false);
	};

	const links = [
		{ name: 'About Me', href: 'about' },
		{ name: 'Portfolio', href: 'portfolio' },
		{ name: 'Skills', href: 'skills' },
		{ name: 'Contact Me', href: 'contact' },
		{ name: 'Blog', href: 'blog' },
	];
	return (
		<>
			{/* Navbar */}
			<nav className={styles.navbar} aria-label='Navigation Bar'>
				{/* Icons */}
				<div className={styles.icons_container}>
					{/* Navigation */}
					<Hamburger size={32} toggled={navIsOpen} toggle={setNavIsOpen} />
					{/* Light/Dark Mode */}
					<VscColorMode size={32} transform='rotate(45)' />
					{/* Scroll Snap Toggle */}
					<CgArrowsScrollV size={30} className={styles.circled} />
					{/* Socials */}
					<IoPersonAddSharp
						size={30}
						className={`${[styles.mobile_only]} ${[styles.socials_icon]}`}
						onClick={toggleSocialsIsOpen}
					/>
					{/* Socials */}
				</div>
				<div className={styles.socials_container}>
					<Socials colorBurn={false} />
				</div>

				{/* Dropdown */}
				{socialsDropdownIsOpen && (
					<div className={styles.socials_dropdown}>
						<Socials colorBurn={false} />
					</div>
				)}
			</nav>

			{/* Navigation Menu */}
			<div
				className={[
					styles.site_navigation,
					navIsOpen ? `${styles.nav_open}` : `${styles.nav_closed}`,
				].join(' ')}>
				<div className={styles.x_container}>
					<Hamburger size={32} toggled={navIsOpen} toggle={setNavIsOpen} />
				</div>
				{/* Links */}
				<ul className={styles.links_list}>
					{links.map((link, index) => (
						<Link key={index} href={`#` + link.href}>
							<a className={styles.link} onClick={toggleNavIsOpen}>
								<div className={styles.color_burn_fullsize}>
									<ColorBurn>{link.name}</ColorBurn>
								</div>
								<div className={styles.sidenav_styles}>{link.name}</div>
							</a>
						</Link>
					))}
				</ul>
			</div>
		</>
	);
};

// Navbar with icons to left, socials to right
// Hamburger onclick opens up navigation div with ul

export default Navbar;
