// React/Next/NPM
import React from "react";
// Components
import AnimatedTitle from "../animatedTitle/AnimatedTitle";
// Styles/Assets
import styles from "./blog.module.scss";

const Blog = () => {
	return (
		<section id="blog" className={`scroll-area ${[styles.blog_section]}`}>
			<AnimatedTitle str="My Blog" />
		</section>
	);
};

export default Blog;
