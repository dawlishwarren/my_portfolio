import React from "react";
import AnimatedTitle from "../animatedTitle/AnimatedTitle";
import styles from "./portfolio.module.scss";

const Portfolio = () => {
	return (
		<section className={`scroll-area ${[styles.portfolio_section]}`}>
			<AnimatedTitle str="My portfolio" id="portfolio" />
		</section>
	);
};

export default Portfolio;
