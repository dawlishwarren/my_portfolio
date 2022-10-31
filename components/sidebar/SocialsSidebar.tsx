// React/Next/NPM
import React from "react";
import { motion } from "framer-motion";
// Components
import MenuItem from "../navigation/menuItem/MenuItem";
// Styles/Assets
import styles from "./sidebar.module.scss";
import {
	TiSocialFacebook,
	TiSocialGithub,
	TiSocialInstagram,
	TiSocialLinkedin,
	TiSocialTwitter,
} from "react-icons/ti";

const background = {
	open: (height = 1000) => ({
		clipPath: `circle(${height * 2 + 200}px at calc(100% - 10vw) 10vh)`,
		transition: {
			type: "spring",
			stiffness: 20,
			restDelta: 2,
		},
		z: 100,
	}),
	closed: {
		clipPath: "circle(30px at calc(100% - 10vw) 10vh)",
		transition: {
			delay: 0.5,
			type: "spring",
			stiffness: 400,
			damping: 40,
		},
		z: -100,
	},
};
const variants = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
		x: 0,
		z: 100,
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
		z: -10,
		x: "100%",
	},
};
const socials = [
	{ index: 0, name: "Facebook", icon: <TiSocialFacebook size={24} /> },
	{ index: 1, name: "Github", icon: <TiSocialGithub size={32} /> },
	{ index: 2, name: "Instagram", icon: <TiSocialInstagram size={24} /> },
	{ index: 3, name: "Twitter", icon: <TiSocialTwitter size={24} /> },
	{ index: 4, name: "LinkedIn", icon: <TiSocialLinkedin size={24} /> },
];

const SocialsSidebar = () => {
	return (
		<>
			<motion.div className={styles.socials_background} variants={background} />
			<motion.ul className={styles.socials_ul} variants={variants}>
				{socials.map((social) => (
					<MenuItem
						i={social.index}
						key={social.index}
						name={social.name}
						icon={social.icon}
					/>
				))}
			</motion.ul>
		</>
	);
};

export default SocialsSidebar;