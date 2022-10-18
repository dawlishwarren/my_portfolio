import React from "react";
import AnimatedTitle from "../animatedTitle/AnimatedTitle";
import styles from "./portfolio.module.scss";

const Portfolio = () => {
	return (
		<section
			id="portfolio"
			className={`scroll-area ${[styles.portfolio_section]}`}>
			<AnimatedTitle str="My portfolio" />
		</section>
	);
};

export default Portfolio;
