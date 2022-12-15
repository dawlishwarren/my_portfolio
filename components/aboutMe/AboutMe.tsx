// React/Next/NPM
import Image from 'next/image';
import { m } from 'framer-motion';
// Components
import AnimatedTitle from '../animatedTitle/AnimatedTitle';
// Styles/Assets
import styles from './aboutMe.module.scss';
import Tilt from '../../assets/tilt.svg';
import MobileArrow from '../../assets/mobileArrow.svg';
import biopic from '../../public/bio.jpeg';
import { useEffect, useState } from 'react';

const bioSentences = [
	<m.p className={styles.bio_paragraph}>
		Hello world, lorem ipsum dolor sit amet… just kidding! I'm a
		<span className={styles.strong}> Leeds based web developer</span>, with a
		passion for front-end and interactivity.
	</m.p>,
	<m.p className={styles.bio_paragraph}>
		Coming from a background in{' '}
		<span className={styles.strong}>professional music</span> and restaurant
		management I am entirely <span className={styles.strong}>self taught</span>{' '}
		in the field of development; but my skills with time-management,
		collaboration and creative problem-solving are well honed.
	</m.p>,
	<m.p className={styles.bio_paragraph}>
		I am an <span className={styles.strong}>advocate</span>, and have recently
		been vocal about (but not limited to):{' '}
		<span className={styles.gradient}>
			accessibility, workplace energy sustainability and men's mental health
			awareness.
		</span>{' '}
		In my free hours catch me making cocktails, with a saxophone, or on a road
		bike, just never at the same time.
	</m.p>,
];

// Component Render
const AboutMe = () => {
	// Media query state to only show svg arrow on mobile and tablet
	const [isDesktop, setDesktop] = useState(false);
	useEffect(() => {
		if (window.innerWidth > 900) {
			setDesktop(true);
		} else {
			setDesktop(false);
		}
		const updateMedia = () => {
			if (window.innerWidth > 900) {
				setDesktop(true);
			} else {
				setDesktop(false);
			}
		};
		window.addEventListener('resize', updateMedia);
		return () => window.removeEventListener('resize', updateMedia);
	}, []);
	return (
		<section id='about' className={`scroll-area ${[styles.about_section]}`}>
			{/* SVG background element */}
			<Tilt className={styles.tilt} />
			{/* Title */}
			<header className={styles.header_wrapper}>
				<AnimatedTitle str='About Me' />
				{!isDesktop && <MobileArrow className={styles.arrow} />}
			</header>
			{/* Content */}
			<div className={styles.content_container}>
				<div className={styles.image_container}>
					<Image
						src={biopic}
						objectFit='fill'
						alt='Picture of author'
						placeholder='blur'
					/>
				</div>
				{/* Sentences mapped to animated divs */}
				<m.div className={styles.bio_container}>
					{bioSentences.map((sentence, i) => (
						<m.div
							key={i}
							className={styles.animation_wrapper}
							initial={{ opacity: 0, translateX: -50 }}
							whileInView={{ opacity: 1, translateX: 0 }}
							transition={{ duration: 1, delay: i * 0.5 }}>
							{sentence}
						</m.div>
					))}
				</m.div>
			</div>
		</section>
	);
};

export default AboutMe;
