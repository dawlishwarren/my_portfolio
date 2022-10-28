// React/Next/NPM
import React from "react";
// Components
import AnimatedTitle from "../animatedTitle/AnimatedTitle";
// Styles/Assets
import styles from "./contact.module.scss";

const Contact = () => {
	return (
		<section id="contact" className={`scroll-area ${[styles.contact_section]}`}>
			<AnimatedTitle str="Contact Me" />
		</section>
	);
};

export default Contact;
