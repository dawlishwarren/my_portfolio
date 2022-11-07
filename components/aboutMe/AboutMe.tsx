// React/Next/NPM
import Image from 'next/image';
import { motion } from 'framer-motion';
// Components
import AnimatedTitle from '../animatedTitle/AnimatedTitle';
// Styles/Assets
import styles from './aboutMe.module.scss';
import Tilt from '../../assets/tilt.svg';
import biopic from '../../public/bio.jpeg';

const bioSentences = [
	`Hello world, lorem ipsum dolor sit amet… just kidding! I'm a Leeds
	(UK) based web developer, with a passion for front-end and interactivity.`,
	`Coming from a background in professional music and restaurant
	management I am entirely self taught in the field of development;
	but my skills with time-management, collaboration and creative
	problem-solving are well honed.`,
	`I am an advocate, and have recently been vocal about (but not
	limited to): accessibility, workplace energy sustainability and
	men's mental health awareness. In my free hours catch me making
	cocktails, with a saxophone, or on a road bike, just never at the
	same time.`,
];
const AboutMe = () => {
	// When visible:
	// Appear from center (left),
	// Quickly change opacity

	return (
		<section id='about' className={`scroll-area ${[styles.about_section]}`}>
			<Tilt className={styles.tilt} />
			<header className={styles.header_wrapper}>
				<AnimatedTitle str='About Me' />
			</header>
			<div className={styles.content_container}>
				<div className={styles.image_container}>
					<Image src={biopic} objectFit='fill' alt='Picture of author' />
				</div>
				{/* Container */}
				<motion.div className={styles.bio_container}>
					{bioSentences.map((sentence, i) => (
						<motion.div
							key={i}
							className={styles.animation_wrapper}
							initial={{ opacity: 0, translateX: -50 }}
							whileInView={{ opacity: 1, translateX: 0 }}
							transition={{ duration: 1, delay: i * 0.5 }}>
							<motion.p className={styles.bio_paragraph}>{sentence}</motion.p>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default AboutMe;
