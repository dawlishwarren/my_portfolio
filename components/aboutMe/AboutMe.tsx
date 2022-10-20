import React from "react";
import AnimatedTitle from "../animatedTitle/AnimatedTitle";
import styles from "./aboutMe.module.scss";
import Tilt from "../../assets/tilt.svg";

const AboutMe = () => {
	return (
		<section id="about" className={`scroll-area ${[styles.about_section]}`}>
			<Tilt className={styles.tilt} />
			<header className={styles.header_wrapper}>
				<AnimatedTitle str="About Me" />
			</header>
		</section>
	);
};

export default AboutMe;
