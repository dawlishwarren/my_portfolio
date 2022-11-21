import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import styles from "./themeChanger.module.scss";
import { GrMoon, GrSun, GrSystem } from "react-icons/gr";
import { RiMoonClearFill, RiSunFill, RiUserSettingsLine } from "react-icons/ri";

interface Props {
	isMouse: boolean;
}

const ThemeChanger = ({ isMouse }: Props) => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	const subMenuAnimate = {
		enter: {
			opacity: 1,
			transition: {
				duration: 1,
			},
			display: "block",
		},
		exit: {
			opacity: 0,
			transition: {
				duration: 1,
				delay: 0.3,
			},
			transitionEnd: {
				display: "none",
			},
		},
	};

	useEffect(() => {
		setMounted(true);
	}, []);
	if (!mounted) {
		return null;
	}

	function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
		setTheme((e.target as HTMLButtonElement).value);
	}

	return (
		<motion.div
			initial="exit"
			animate={isMouse ? "enter" : "exit"}
			variants={subMenuAnimate}
			className={styles.sub_menu}>
			<div className={styles.sub_menu_background} />
			<div className={styles.sub_menu_container}>
				<motion.button
					whileHover={{ scale: 1.02 }}
					className={styles.sub_menu_item}
					onClick={handleClick}
					onMouseDown={handleClick}
					value="system">
					<RiUserSettingsLine style={{ pointerEvents: "none" }} size={30} />
					System
				</motion.button>
				<motion.button
					whileHover={{ scale: 1.02 }}
					className={styles.sub_menu_item}
					onClick={handleClick}
					value="light">
					<RiSunFill style={{ pointerEvents: "none" }} size={30} />
					Light
				</motion.button>
				<motion.button
					whileHover={{ scale: 1.02 }}
					className={styles.sub_menu_item}
					onClick={handleClick}
					value="dark">
					<RiMoonClearFill style={{ pointerEvents: "none" }} size={30} />
					Dark
				</motion.button>
			</div>
		</motion.div>
	);
};

export default ThemeChanger;
