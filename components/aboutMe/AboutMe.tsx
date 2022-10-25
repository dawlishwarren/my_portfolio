// React/Next/NPM
import React from "react";
// Components
import AnimatedTitle from "../animatedTitle/AnimatedTitle";
// Styles/Assets
import styles from "./aboutMe.module.scss";
import Tilt from "../../assets/tilt.svg";
import Logo from "../../assets/aw.svg";
import Timeline from "../timeline/Timeline";

const AboutMe = () => {
	return (
		<section id="about" className={`scroll-area ${[styles.about_section]}`}>
			<Tilt className={styles.tilt} />
			<header className={styles.header_wrapper}>
				<AnimatedTitle str="About Me" />
				<div className={styles.logo_container}>
					<Logo className={styles.logo} />
				</div>
			</header>
			<Timeline />
		</section>
	);
};

export default AboutMe;
