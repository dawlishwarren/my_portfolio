import React from "react";
import AnimatedTitle from "../animatedTitle/AnimatedTitle";
import styles from "./skills.module.scss";

const Skills = () => {
	return (
		<section id="skills" className={`scroll-area ${[styles.skills_section]}`}>
			<AnimatedTitle str="My Skills" />
		</section>
	);
};

export default Skills;
