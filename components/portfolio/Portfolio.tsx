import React, { useRef, useState } from 'react';
import AnimatedTitle from '../animatedTitle/AnimatedTitle';
import styles from './portfolio.module.scss';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import Image from 'next/image';
import tourism from '../../public/tourism.png';
import directory from '../../public/directory.png';
import logo from '../../public/logo.png';
import portfolio from '../../public/portfolio.png';
import consultation from '../../public/consultation.png';
import O from '../../assets/O.svg';
import { motion, useScroll } from 'framer-motion';
interface SlideState {
	currentSlide: number;
	previousSlide: number;
	nextSlide: number;
}

const carouselData = [
	{ index: 0, title: 'Vanilla HTML', url: tourism },
	{ index: 1, title: 'Custom UI', url: directory },
	{ index: 2, title: 'SVG Design', url: logo },
	{ index: 3, title: 'Responsive Layout', url: portfolio },
	{ index: 4, title: 'Consultation', url: consultation },
];

const Portfolio = () => {
	// Carousel State
	const [slideState, setSlideState] = useState<SlideState>({
		previousSlide: 0,
		currentSlide: 1,
		nextSlide: 2,
	});
	// Length
	const length = carouselData.length;
	// Destructuring state
	const { currentSlide, previousSlide, nextSlide } = slideState;

	function toPreviousSlide() {
		setSlideState({
			...slideState,
			previousSlide: previousSlide === 0 ? length - 1 : previousSlide - 1,
			currentSlide: currentSlide === 0 ? length - 1 : currentSlide - 1,
			nextSlide: nextSlide === 0 ? length - 1 : nextSlide - 1,
		});
	}
	function toNextSlide() {
		setSlideState({
			...slideState,
			previousSlide: previousSlide === length - 1 ? 0 : previousSlide + 1,
			currentSlide: currentSlide === length - 1 ? 0 : currentSlide + 1,
			nextSlide: nextSlide === length - 1 ? 0 : nextSlide + 1,
		});
	}
	if (!Array.isArray(carouselData) || carouselData.length <= 0) {
		return null;
	}

	const ref = useRef(null);
	const { scrollXProgress } = useScroll({ container: ref });
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
					width='min(6vw, 3rem)'
					height='min(6vw, 3rem)'
					viewBox='0 0 53 55'
					className={styles.progress}>
					<path
						d='M26.52 0.399999C31.8533 0.399999 36.44 1.49333 40.28 3.68C44.1733 5.81333 47.16 8.90666 49.24 12.96C51.32 17.0133 52.36 21.8933 52.36 27.6C52.36 33.3067 51.32 38.1867 49.24 42.24C47.16 46.2933 44.1733 49.4133 40.28 51.6C36.44 53.7333 31.8533 54.8 26.52 54.8C21.1867 54.8 16.5733 53.7333 12.68 51.6C8.78667 49.4133 5.8 46.2933 3.72 42.24C1.64 38.1867 0.6 33.3067 0.6 27.6C0.6 21.8933 1.64 17.0133 3.72 12.96C5.8 8.90666 8.78667 5.81333 12.68 3.68C16.5733 1.49333 21.1867 0.399999 26.52 0.399999ZM26.52 11.2C23.96 11.2 21.8 11.8133 20.04 13.04C18.28 14.2667 16.9467 16.1067 16.04 18.56C15.1333 20.96 14.68 23.9733 14.68 27.6C14.68 31.1733 15.1333 34.1867 16.04 36.64C16.9467 39.0933 18.28 40.9333 20.04 42.16C21.8 43.3867 23.96 44 26.52 44C29.08 44 31.2133 43.3867 32.92 42.16C34.68 40.9333 36.0133 39.0933 36.92 36.64C37.8267 34.1867 38.28 31.1733 38.28 27.6C38.28 23.9733 37.8267 20.96 36.92 18.56C36.0133 16.1067 34.68 14.2667 32.92 13.04C31.2133 11.8133 29.08 11.2 26.52 11.2Z'
						className={styles.bg}
					/>
					<path
						d='M40.28 3.68L40.0325 4.11455L40.0397 4.11849L40.28 3.68ZM49.24 12.96L49.6849 12.7317L49.6849 12.7317L49.24 12.96ZM49.24 42.24L49.6849 42.4683L49.6849 42.4683L49.24 42.24ZM40.28 51.6L40.5228 52.0371L40.5248 52.0359L40.28 51.6ZM12.68 51.6L12.4351 52.036L12.4397 52.0385L12.68 51.6ZM3.72 42.24L4.16485 42.0117L4.16485 42.0117L3.72 42.24ZM3.72 12.96L4.16485 13.1883L4.16485 13.1883L3.72 12.96ZM12.68 3.68L12.9203 4.11851L12.9248 4.11595L12.68 3.68ZM20.04 13.04L19.7541 12.6298L20.04 13.04ZM16.04 18.56L16.5077 18.7367L16.509 18.7333L16.04 18.56ZM16.04 36.64L15.571 36.8133L15.571 36.8133L16.04 36.64ZM32.92 42.16L32.6341 41.7498L32.6282 41.754L32.92 42.16ZM36.92 36.64L36.451 36.4667L36.451 36.4667L36.92 36.64ZM36.92 18.56L36.451 18.7333L36.4523 18.7367L36.92 18.56ZM32.92 13.04L32.6282 13.446L32.6341 13.4502L32.92 13.04ZM26.52 0.899999C31.7845 0.899999 36.2821 1.97883 40.0326 4.11449L40.5274 3.24551C36.5979 1.00784 31.9222 -0.100001 26.52 -0.100001V0.899999ZM40.0397 4.11849C43.843 6.20246 46.7595 9.22141 48.7952 13.1883L49.6849 12.7317C47.5605 8.59192 44.5037 5.42421 40.5203 3.24151L40.0397 4.11849ZM48.7952 13.1883C50.8309 17.1554 51.86 21.9531 51.86 27.6H52.86C52.86 21.8336 51.8091 16.8713 49.6849 12.7317L48.7952 13.1883ZM51.86 27.6C51.86 33.2469 50.8309 38.0446 48.7952 42.0117L49.6849 42.4683C51.8091 38.3287 52.86 33.3664 52.86 27.6H51.86ZM48.7952 42.0117C46.759 45.9796 43.8411 49.0265 40.0352 51.1641L40.5248 52.0359C44.5056 49.8002 47.561 46.6071 49.6849 42.4683L48.7952 42.0117ZM40.0372 51.1629C36.2858 53.247 31.7864 54.3 26.52 54.3V55.3C31.9202 55.3 36.5942 54.2197 40.5228 52.0371L40.0372 51.1629ZM26.52 54.3C21.2538 54.3 16.7265 53.2471 12.9203 51.1615L12.4397 52.0385C16.4202 54.2196 21.1195 55.3 26.52 55.3V54.3ZM12.9248 51.1641C9.11895 49.0265 6.20098 45.9796 4.16485 42.0117L3.27515 42.4683C5.39902 46.6071 8.45438 49.8002 12.4352 52.0359L12.9248 51.1641ZM4.16485 42.0117C2.1291 38.0446 1.1 33.2469 1.1 27.6H0.1C0.1 33.3664 1.1509 38.3287 3.27515 42.4683L4.16485 42.0117ZM1.1 27.6C1.1 21.9531 2.1291 17.1554 4.16485 13.1883L3.27515 12.7317C1.1509 16.8713 0.1 21.8336 0.1 27.6H1.1ZM4.16485 13.1883C6.20048 9.22141 9.11702 6.20246 12.9203 4.11849L12.4397 3.24151C8.45631 5.42421 5.39952 8.59192 3.27515 12.7317L4.16485 13.1883ZM12.9248 4.11595C16.7301 1.97875 21.2558 0.899999 26.52 0.899999V-0.100001C21.1176 -0.100001 16.4166 1.00792 12.4352 3.24405L12.9248 4.11595ZM26.52 10.7C23.878 10.7 21.6131 11.3341 19.7541 12.6298L20.3259 13.4502C21.9869 12.2926 24.0421 11.7 26.52 11.7V10.7ZM19.7541 12.6298C17.8934 13.9266 16.5052 15.8588 15.571 18.3867L16.509 18.7333C17.3881 16.3545 18.6666 14.6067 20.3259 13.4502L19.7541 12.6298ZM15.5723 18.3833C14.6374 20.8579 14.18 23.936 14.18 27.6H15.18C15.18 24.0107 15.6293 21.0621 16.5077 18.7367L15.5723 18.3833ZM14.18 27.6C14.18 31.2123 14.6378 34.2883 15.571 36.8133L16.509 36.4667C15.6288 34.085 15.18 31.1344 15.18 27.6H14.18ZM15.571 36.8133C16.5052 39.3412 17.8934 41.2734 19.7541 42.5702L20.3259 41.7498C18.6666 40.5933 17.3881 38.8455 16.509 36.4667L15.571 36.8133ZM19.7541 42.5702C21.6131 43.8659 23.878 44.5 26.52 44.5V43.5C24.0421 43.5 21.9869 42.9074 20.3259 41.7498L19.7541 42.5702ZM26.52 44.5C29.1615 44.5 31.403 43.8661 33.2118 42.566L32.6282 41.754C31.0237 42.9072 28.9985 43.5 26.52 43.5V44.5ZM33.2059 42.5702C35.0666 41.2734 36.4548 39.3412 37.389 36.8133L36.451 36.4667C35.5719 38.8455 34.2934 40.5933 32.6341 41.7498L33.2059 42.5702ZM37.389 36.8133C38.3222 34.2883 38.78 31.2123 38.78 27.6H37.78C37.78 31.1344 37.3312 34.085 36.451 36.4667L37.389 36.8133ZM38.78 27.6C38.78 23.936 38.3226 20.8579 37.3877 18.3833L36.4523 18.7367C37.3308 21.0621 37.78 24.0107 37.78 27.6H38.78ZM37.389 18.3867C36.4548 15.8588 35.0666 13.9266 33.2059 12.6298L32.6341 13.4502C34.2934 14.6067 35.5719 16.3545 36.451 18.7333L37.389 18.3867ZM33.2118 12.634C31.403 11.3339 29.1615 10.7 26.52 10.7V11.7C28.9985 11.7 31.0237 12.2928 32.6282 13.446L33.2118 12.634Z'
						pathLength='1'
						className={styles.indicator}
						style={{ fillOpacity: scrollXProgress }}
					/>
				</svg>
				<AnimatedTitle str='rtfolio' />
			</div>
			<div className={styles.carousel_container}>
				<ul className={styles.carousel} ref={ref}>
					{carouselData.map((slide, index) => (
						<li key={index} className={styles.list_item}>
							<h2 className={styles.slide_title}>{slide.title}</h2>
							<Image
								className={styles.slide_image}
								src={slide.url}
								width={300}
								height={500}
								objectFit={'scale-down'}
							/>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Portfolio;
