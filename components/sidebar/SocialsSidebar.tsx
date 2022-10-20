import React from "react";
import { motion } from "framer-motion";
import styles from "./sidebar.module.scss";
import SocialsNav from "../socials/SocialsNav";

const sidebar = {
	open: (height = 1000) => ({
		clipPath: `circle(${height * 2 + 200}px at calc(100% - 40px) 40px)`,
		transition: {
			type: "spring",
			stiffness: 20,
			restDelta: 2,
		},
	}),
	closed: {
		clipPath: "circle(30px at calc(100% - 40px) 40px)",
		transition: {
			delay: 0.5,
			type: "spring",
			stiffness: 400,
			damping: 40,
		},
	},
};

const SocialsSidebar = () => {
	return (
		<>
			<motion.div className={styles.socials_background} variants={sidebar} />
			<SocialsNav />
		</>
	);
};

export default SocialsSidebar;
