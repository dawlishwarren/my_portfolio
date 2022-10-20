import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import styles from "./header.module.scss";
import { VscColorMode } from "react-icons/vsc";
import { IoPersonAddSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import Socials from "../socials/Socials";

const Header = () => {
	// Socials Dropdown
	const [socialsDropdownIsOpen, setSocialsDropdownIsOpen] = useState(false);

	return (
		<header className={styles.header}>
			<Navbar />
			<div className={styles.icons_container}>
				<motion.button
					whileHover={{ boxShadow: "0 0 0 2px #f6f6f6" }}
					className={styles.icon}>
					<VscColorMode size={40} transform="rotate(45)" />
				</motion.button>
			</div>
			<Socials />
		</header>
	);
};

export default Header;
