// React/Next/NPM
import React from 'react';
import { m } from 'framer-motion';
// Components
import MenuItem from '../menuItem/MenuItem';
// Styles/Assets
import styles from './sidebar.module.scss';
import hoverStyles from '../../styles/hover.module.scss';
import {
	TiSocialFacebook,
	TiSocialGithub,
	TiSocialInstagram,
	TiSocialLinkedin,
	TiSocialTwitter,
} from 'react-icons/ti';

// Motion variants
const backgroundVariants = {
	open: (height = 1000) => ({
		clipPath: `circle(${height * 2 + 200}px at calc(100% - 10vw) 10vh)`,
		transition: {
			type: 'spring',
			stiffness: 20,
			restDelta: 2,
		},
		z: 100,
	}),
	closed: {
		clipPath: 'circle(30px at calc(100% - 10vw) 10vh)',
		transition: {
			delay: 0.5,
			type: 'spring',
			stiffness: 400,
			damping: 40,
		},
		z: -100,
	},
};
const linksVariants = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
	closed: {
		transition: { staggerChildren: 0.09, staggerDirection: -1 },
	},
};

// Names, icons and links to be mapped
const socials = [
	{ index: 0, name: 'Facebook', icon: <TiSocialFacebook size={24} /> },
	{ index: 1, name: 'Github', icon: <TiSocialGithub size={32} /> },
	{ index: 2, name: 'Instagram', icon: <TiSocialInstagram size={24} /> },
	{ index: 3, name: 'Twitter', icon: <TiSocialTwitter size={24} /> },
	{ index: 4, name: 'LinkedIn', icon: <TiSocialLinkedin size={24} /> },
];

const SocialsSidebar = () => {
	const handleMouseMove = (e: React.MouseEvent<HTMLUListElement>) => {
		e.preventDefault();

		for (const item of document.getElementsByClassName(
			`${hoverStyles.menu_item}`
		) as HTMLCollectionOf<HTMLLIElement>) {
			const rect = item.getBoundingClientRect(),
				x = e.clientX - rect.left,
				y = e.clientY - rect.top;
			item.style.setProperty('--mouse-x', `${x}px`);
			item.style.setProperty('--mouse-y', `${y}px`);
		}
	};
	return (
		<>
			<m.div
				className={styles.socials_background}
				variants={backgroundVariants}
			/>
			<m.ul
				className={styles.socials_ul}
				variants={linksVariants}
				onMouseMove={handleMouseMove}>
				{socials.map((social) => (
					<MenuItem
						i={social.index}
						key={social.index}
						name={social.name}
						icon={social.icon}
					/>
				))}
			</m.ul>
		</>
	);
};

export default SocialsSidebar;
