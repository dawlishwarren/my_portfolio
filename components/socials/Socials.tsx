import React, { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import SocialToggle from "../socialToggle/SocialToggle";
import SocialsSidebar from "../sidebar/SocialsSidebar";
import styles from "./socials.module.scss";
import { useDimensions } from "../../utils/use-dimensions";

const Socials = () => {
	const [isOpen, toggleOpen] = useCycle(false, true);
	const containerRef = useRef(null);
	const { height } = useDimensions(containerRef);
	return (
		<motion.nav
			initial={false}
			animate={isOpen ? "open" : "closed"}
			className={styles.nav}
			custom={height}
			ref={containerRef}>
			<SocialsSidebar />
			<SocialToggle toggle={() => toggleOpen()} />
		</motion.nav>
	);
};

export default Socials;
