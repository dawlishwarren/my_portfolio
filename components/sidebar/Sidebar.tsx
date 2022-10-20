import React from "react";
import Navigation from "../navigation/Navigation";
import { motion } from "framer-motion";
import styles from "./sidebar.module.scss";

const sidebar = {
	open: (height = 1000) => ({
		clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
		transition: {
			type: "spring",
			stiffness: 20,
			restDelta: 2,
		},
	}),
	closed: {
		clipPath: "circle(30px at 40px 40px)",
		transition: {
			delay: 0.5,
			type: "spring",
			stiffness: 400,
			damping: 40,
		},
	},
};

const Sidebar = () => {
	return (
		<>
			<motion.div className={styles.background} variants={sidebar} />
			<Navigation />
		</>
	);
};

export default Sidebar;
