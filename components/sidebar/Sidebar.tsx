// React/Next/NPM
import React from 'react';
import { motion } from 'framer-motion';
// Components
import MenuItem from '../siteNavigation/menuItem/MenuItem';
// Styles/Assets
import styles from './sidebar.module.scss';
import { VscColorMode } from 'react-icons/vsc';
import { links } from '../../data/navbarLinks';

interface Props {
	toggle: VoidFunction;
}

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
	return (
		<>
			{/* Background */}
			<motion.div className={styles.background} variants={backgroundVariants} />
			{/* Content */}
			<motion.ul
				className={styles.ul}
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
				<MenuItem
					i={links.length}
					name={'Light/Dark Mode Toggle'}
					icon={<VscColorMode size={40} transform='rotate(45)' />}
					href='/'
				/>
			</motion.ul>
		</>
	);
};
export default Sidebar;
