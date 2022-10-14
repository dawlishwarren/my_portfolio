import React from "react";
import AnimatedTitle from "../animatedTitle/AnimatedTitle";
import styles from "./contact.module.scss";

const Contact = () => {
	return (
		<section id="contact" className={`scroll-area ${[styles.contact_section]}`}>
			<AnimatedTitle str="Contact Me" />
		</section>
	);
};

export default Contact;
