import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import styles from './themeChanger.module.scss';

interface Props {
	isMouse: boolean;
}

const ThemeChanger = ({ isMouse }: Props) => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	const subMenuAnimate = {
		enter: {
			opacity: 1,
			rotateX: 0,
			transition: {
				duration: 0.5,
			},
			display: 'block',
		},
		exit: {
			opacity: 0,
			rotateX: -15,
			transition: {
				duration: 0.5,
				delay: 0.3,
			},
			transitionEnd: {
				display: 'none',
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
			initial='exit'
			animate={isMouse ? 'enter' : 'exit'}
			variants={subMenuAnimate}
			className={styles.sub_menu}>
			<div className={styles.sub_menu_background} />
			<div className={styles.sub_menu_container}>
				<button
					className={styles.sub_menu_item}
					onClick={handleClick}
					value='system'>
					System
				</button>
				<button
					className={styles.sub_menu_item}
					onClick={handleClick}
					value='light'>
					Light
				</button>
				<button
					className={styles.sub_menu_item}
					onClick={handleClick}
					value='dark'>
					Dark
				</button>
			</div>
		</motion.div>
	);
};

export default ThemeChanger;
