// React/Next/NPM
import React, { useState } from 'react';
import { motion } from 'framer-motion';
// Components
import MenuItem from '../siteNavigation/menuItem/MenuItem';
// Styles/Assets
import styles from './sidebar.module.scss';
import { VscColorMode } from 'react-icons/vsc';
// import { links } from '../../data/navbarLinks';
export const links = [
	{ index: 0, name: 'Top', href: 'main' },
	{ index: 1, name: 'About Me', href: 'about' },
	{ index: 2, name: 'Skills', href: 'skills' },
	{ index: 3, name: 'Portfolio', href: 'portfolio' },
	{ index: 4, name: 'Contact Me', href: 'contact' },
	{ index: 5, name: 'Blog', href: 'blog' },
];

import ThemeChanger from '../themeChanger/ThemeChanger';
// Prop Types
interface Props {
	toggle: VoidFunction;
}

// Framer Motion variants
const backgroundVariants = {
	open: (height = 1000) => ({
		clipPath: `circle(${height * 2 + 200}px at 10vw 10vh)`,
		transition: {
			type: 'spring',
			stiffness: 20,
			restDelta: 2,
		},
	}),
	closed: {
		clipPath: 'circle(30px at 10vw 10vh)',
		transition: {
			delay: 0.5,
			type: 'spring',
			stiffness: 400,
			damping: 40,
		},
	},
};
const linksVariants = {
	open: {
		x: 0,
		z: 0,
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
	closed: {
		x: '-100vw',
		z: '-10px',
		transition: { staggerChildren: 0.07, staggerDirection: -1 },
	},
};

const Sidebar = ({ toggle }: Props) => {
	const [themeOpen, setThemeOpen] = useState<boolean>(false);
	const toggleThemeOpen = () => {
		setThemeOpen(!themeOpen);
	};
	console.log(themeOpen);
	return (
		<>
			{/* Background */}
			<motion.div className={styles.background} variants={backgroundVariants} />
			{/* Content */}
			<ul className={styles.ul}>
				<motion.ul
					className={styles.nav_ul}
					variants={linksVariants}
					onClick={toggle}>
					{links.map((link) => (
						<MenuItem
							i={link.index}
							key={link.index}
							name={link.name}
							href={link.href}
						/>
					))}
				</motion.ul>
				{/* On Click show the theme changer */}
				<motion.ul variants={linksVariants} onClick={toggleThemeOpen}>
					<MenuItem
						i={links.length}
						name={'Light/Dark Mode Toggle'}
						icon={<VscColorMode size={40} transform='rotate(45)' />}
						href='/'
					/>
					{themeOpen && <ThemeChanger />}
				</motion.ul>
			</ul>
		</>
	);
};
export default Sidebar;
