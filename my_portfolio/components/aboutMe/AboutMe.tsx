import React from 'react';
import AnimatedTitle from '../animatedTitle/AnimatedTitle';
import styles from './aboutMe.module.scss';

const AboutMe = () => {
	return (
		<section id='about' className={`scroll-area ${[styles.about_section]}`}>
			<header>
				<AnimatedTitle str='About Me' />
			</header>
		</section>
	);
};

export default AboutMe;
