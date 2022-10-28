// React/Next/NPM
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
// Components
import AnimatedTitle from '../animatedTitle/AnimatedTitle';
// Styles/Assets
import styles from './aboutMe.module.scss';
import Tilt from '../../assets/tilt.svg';
import Logo from '../../assets/aw.svg';
import Timeline from '../timeline/Timeline';
// Utilities
import { useDimensions } from '../../utils/use-dimensions';

const AboutMe = () => {
	const containerRef = useRef(null);
	const { width } = useDimensions(containerRef);
	return (
		<section id='about' className={`scroll-area ${[styles.about_section]}`}>
			<Tilt className={styles.tilt} />
			<header className={styles.header_wrapper}>
				<AnimatedTitle str='About Me' />
				<div className={styles.logo_container}>
					<Logo className={styles.logo} />
				</div>
			</header>
			<motion.div
				className={styles.timeline_container}
				ref={containerRef}
				custom={width}>
				<Timeline />
			</motion.div>
		</section>
	);
};

export default AboutMe;
