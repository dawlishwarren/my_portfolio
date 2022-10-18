import React from "react";
import AnimatedTitle from "../animatedTitle/AnimatedTitle";
import styles from "./blog.module.scss";

const Blog = () => {
	return (
		<section id="blog" className={`scroll-area ${[styles.blog_section]}`}>
			<AnimatedTitle str="My Blog" />
		</section>
	);
};

export default Blog;
