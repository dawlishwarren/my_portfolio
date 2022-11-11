// React/Next/NPM
import React, { useState } from 'react';
import { motion } from 'framer-motion';
// Components
import MenuItem from '../siteNavigation/menuItem/MenuItem';
import ThemeChanger from '../themeChanger/ThemeChanger';

// Styles/Assets
import styles from './sidebar.module.scss';
import { VscColorMode } from 'react-icons/vsc';
import { AiOutlineToTop } from 'react-icons/ai';
import { GiSkills } from 'react-icons/gi';
import { SiAboutdotme } from 'react-icons/si';
import { MdViewCarousel } from 'react-icons/md';
import { RiContactsLine } from 'react-icons/ri';
import { BsCodeSlash } from 'react-icons/bs';
const links = [
	{ index: 0, name: 'Top', href: 'main', icon: <AiOutlineToTop size={18} /> },
	{
		index: 1,
		name: 'About Me',
		href: 'about',
		icon: <SiAboutdotme size={18} />,
	},
	{ index: 2, name: 'Skills', href: 'skills', icon: <GiSkills size={18} /> },
	{
		index: 3,
		name: 'Portfolio',
		href: 'portfolio',
		icon: <MdViewCarousel size={18} />,
	},
	{
		index: 4,
		name: 'Contact Me',
		href: 'contact',
		icon: <RiContactsLine size={18} />,
	},
	{ index: 5, name: 'Blog', href: 'blog', icon: <BsCodeSlash size={18} /> },
];

// Prop Types
interface Props {
	toggle: VoidFunction;
}

const Sidebar = ({ toggle }: Props) => {
	const [isMouse, toggleMouse] = useState(false);
	const toggleMouseMenu = () => {
		toggleMouse(!isMouse);
	};
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
							icon={link.icon}
						/>
					))}
				</motion.ul>
				{/* WRAPPER */}
				<motion.ul
					variants={linksVariants}
					onMouseEnter={toggleMouseMenu}
					onMouseLeave={toggleMouseMenu}>
					{/* MENU ITEM LINK*/}
					<MenuItem
						i={links.length}
						name={'Light/Dark Mode Toggle'}
						icon={<VscColorMode size={40} transform='rotate(45)' />}
						href='/'
					/>
					{/* SUB-MENU */}
					{isMouse && <ThemeChanger isMouse />}
				</motion.ul>
			</ul>
		</>
	);
};
export default Sidebar;
