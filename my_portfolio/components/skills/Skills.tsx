import React from "react";
import AnimatedTitle from "../animatedTitle/AnimatedTitle";
import styles from "./skills.module.scss";

const Skills = () => {
	return (
		<section className={`scroll-area ${[styles.skills_section]}`}>
			<AnimatedTitle str="My Skills" id="skills" />
		</section>
	);
};

export default Skills;
