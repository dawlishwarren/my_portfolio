import React from "react";
import AnimatedTitle from "../animatedTitle/AnimatedTitle";
import styles from "./contact.module.scss";

const Contact = () => {
	return (
		<section className={`scroll-area ${[styles.contact_section]}`}>
			<AnimatedTitle str="Contact Me" id="contact" />
		</section>
	);
};

export default Contact;
