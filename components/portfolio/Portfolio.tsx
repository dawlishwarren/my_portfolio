// React/Next/NPM
import React, { useEffect, useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import {
	AnimatePresence,
	motion,
	useScroll,
	useSpring,
	useTransform,
} from 'framer-motion';
// Components
import AnimatedTitle from '../animatedTitle/AnimatedTitle';
import Modal from '../modal/Modal';
// Styles/Assets
import styles from './portfolio.module.scss';
import tourism from '../../public/tourism.png';
import directory from '../../public/directory.png';
import logo from '../../public/logo.png';
import portfolio from '../../public/portfolio.png';
import consultation from '../../public/consultation.png';

// Prop Types
interface Carousel {
	title: string;
	url: StaticImageData;
	index: number;
	alt: string;
}
// Data to map
const carouselData = [
	{
		index: 0,
		title: 'Vanilla HTML',
		url: tourism,
		alt: 'HTML Tourism website homepage screenshot',
	},
	{
		index: 1,
		title: 'Custom UI',
		url: directory,
		alt: 'Business directory UI',
	},
	{ index: 2, title: 'SVG Design', url: logo, alt: 'Website logo' },
	{
		index: 3,
		title: 'Responsive Layout',
		url: portfolio,
		alt: 'Landing page with responsive layout',
	},
	{
		index: 4,
		title: 'Consultation',
		url: consultation,
		alt: 'Screenshot of tourism website',
	},
];

const Portfolio = () => {
	// Modal State
	const [modalOpen, setModalOpen] = useState(false);
	const [activePanel, setActivePanel] = useState<Carousel>({
		title: '',
		url: { src: '', height: 0, width: 0 },
		index: 0,
		alt: '',
	});
	const close = () => setModalOpen(false);

	const ref = useRef(null);
	const [currentPercent, setCurrentPercent] = useState(0);
	const { scrollXProgress } = useScroll({ container: ref });
	const xRange = useTransform(scrollXProgress, [0, 1], [0, 100]);
	const pathLength = useSpring(scrollXProgress, {
		stiffness: 400,
		damping: 90,
	});

	useEffect(
		() =>
			xRange.onChange(() => {
				setCurrentPercent(Math.trunc(xRange.get()));
			}),
		[xRange]
	);
	return (
		<section
			id='portfolio'
			className={`scroll-area ${[styles.portfolio_section]}`}>
			<div className={styles.header_wrapper}>
				<AnimatedTitle str='My P' />

				{/* <svg
					id='progress'
					width='min(8vw, 3.8rem)'
					height='min(8vw, 3.8rem)'
					viewBox='0 0 100 100'
					className={styles.progress}>
					<circle cx='50' cy='50' r='30' pathLength='1' className={styles.bg} />
					<motion.circle
						cx='50'
						cy='50'
						r='30'
						pathLength='1'
						className={styles.indicator}
						style={{ pathLength: scrollXProgress }}
					/>
				</svg> */}
				<svg
					className={styles.progress}
					fill={currentPercent === 100 ? 'red' : 'none'}
					width='53'
					height='55'
					viewBox='0 0 53 55'
					strokeDasharray='0 1'
					xmlns='http://www.w3.org/2000/svg'>
					<motion.path
						fill='white'
						strokeWidth='8'
						style={{
							pathLength,
							scaleX: -1,
							opacity: pathLength,
						}}
						d='M26.52 0.399999C31.8533 0.399999 36.44 1.49333 40.28 3.68C44.1733 5.81333 47.16 8.90666 49.24 12.96C51.32 17.0133 52.36 21.8933 52.36 27.6C52.36 33.3067 51.32 38.1867 49.24 42.24C47.16 46.2933 44.1733 49.4133 40.28 51.6C36.44 53.7333 31.8533 54.8 26.52 54.8C21.1867 54.8 16.5733 53.7333 12.68 51.6C8.78667 49.4133 5.8 46.2933 3.72 42.24C1.64 38.1867 0.6 33.3067 0.6 27.6C0.6 21.8933 1.64 17.0133 3.72 12.96C5.8 8.90666 8.78667 5.81333 12.68 3.68C16.5733 1.49333 21.1867 0.399999 26.52 0.399999ZM26.52 11.2C23.96 11.2 21.8 11.8133 20.04 13.04C18.28 14.2667 16.9467 16.1067 16.04 18.56C15.1333 20.96 14.68 23.9733 14.68 27.6C14.68 31.1733 15.1333 34.1867 16.04 36.64C16.9467 39.0933 18.28 40.9333 20.04 42.16C21.8 43.3867 23.96 44 26.52 44C29.08 44 31.2133 43.3867 32.92 42.16C34.68 40.9333 36.0133 39.0933 36.92 36.64C37.8267 34.1867 38.28 31.1733 38.28 27.6C38.28 23.9733 37.8267 20.96 36.92 18.56C36.0133 16.1067 34.68 14.2667 32.92 13.04C31.2133 11.8133 29.08 11.2 26.52 11.2Z'
					/>
				</svg>

				<AnimatedTitle str='rtfolio' />
				{currentPercent}
			</div>
			<div className={styles.carousel_container}>
				<ul className={styles.carousel} ref={ref}>
					{carouselData.map((slide, index) => (
						<motion.li
							key={index}
							className={styles.list_item}
							onClick={() => {
								modalOpen ? setModalOpen(false) : setModalOpen(true);
								setActivePanel(slide);
							}}>
							<h2 className={styles.slide_title}>{slide.title}</h2>
							<Image
								className={styles.slide_image}
								src={slide.url}
								width={300}
								height={500}
								objectFit={'scale-down'}
								alt={slide.alt}
								priority
							/>
						</motion.li>
					))}
				</ul>
				<AnimatePresence initial={false} mode='wait'>
					{modalOpen && (
						<Modal modalOpen={modalOpen} handleClose={close}>
							<div>{activePanel.title}</div>
							<Image
								className={styles.slide_image}
								src={activePanel.url}
								width={300}
								height={500}
								objectFit={'scale-down'}
								alt={activePanel.alt}
							/>
						</Modal>
					)}
				</AnimatePresence>
			</div>
		</section>
	);
};

export default Portfolio;
