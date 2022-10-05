import React from "react";
import AnimatedTitle from "../animatedTitle/AnimatedTitle";
import styles from "./aboutMe.module.scss";

const AboutMe = () => {
	return (
		<section className={`scroll-area ${[styles.about_section]}`}>
			<AnimatedTitle str="About Me" id="about" />
		</section>
	);
};

export default AboutMe;
