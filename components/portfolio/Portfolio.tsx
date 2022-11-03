import React from 'react';
import AnimatedTitle from '../animatedTitle/AnimatedTitle';
import styles from './portfolio.module.scss';

const Portfolio = () => {
	return (
		<section
			id='portfolio'
			className={`scroll-area ${[styles.portfolio_section]}`}>
			<div className={styles.header_wrapper}>
				<AnimatedTitle str='My portfolio' />
			</div>
		</section>
	);
};

export default Portfolio;
