import React from "react";
import AnimatedTitle from "../animatedTitle/AnimatedTitle";
import styles from "./blog.module.scss";

const Blog = () => {
	return (
		<section className={`scroll-area ${[styles.blog_section]}`}>
			<AnimatedTitle str="My Blog" id="blog" />
		</section>
	);
};

export default Blog;
