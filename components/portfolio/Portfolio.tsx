import React, { useEffect, useState } from 'react';
import AnimatedTitle from '../animatedTitle/AnimatedTitle';
import styles from './portfolio.module.scss';
import town from '../../public/town.jpg';
import portfolio from '../../public/portfolio.jpg';
import saxophone from '../../public/saxophone.jpg';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import Image from 'next/image';

interface SlideState {
	currentSlide: number;
	previousSlide: number;
	nextSlide: number;
}

const carouselData = [
	{ index: 0, name: 'blog', url: town },
	{ index: 1, name: 'portfolio', url: portfolio },
	{ index: 2, name: 'sax', url: saxophone },
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
	// Set initial slide state
	useEffect(() => {
		setSlideState({
			...slideState,
			previousSlide: length - 1,
			currentSlide: 0,
			nextSlide: 1,
		});
	}, []);

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
	return (
		<section
			id='portfolio'
			className={`scroll-area ${[styles.portfolio_section]}`}>
			<div className={styles.header_wrapper}>
				<AnimatedTitle str='My portfolio' />
			</div>
			<div className={styles.carousel_container}>
				<div className={styles.carousel}>
					<FaArrowAltCircleLeft
						className={styles.left_arrow}
						onClick={toPreviousSlide}
					/>
					<FaArrowAltCircleRight
						className={styles.right_arrow}
						onClick={toNextSlide}
					/>

					{/* Previous slide */}
					{carouselData
						.filter((data) => data.index === previousSlide)
						.map((slide) => (
							<div className={styles.previous_slide}>
								<Image src={slide.url} width={150 * 1.618} height={150} />
							</div>
						))}

					{/* Current slide */}
					{carouselData
						.filter((data) => data.index === currentSlide)
						.map((slide) => (
							<div className={styles.slide} key={slide.index}>
								<Image
									src={slide.url}
									width={300 * 1.618}
									height={300}
									className={styles.image}
								/>
							</div>
						))}

					{/* Next slide */}
					{carouselData
						.filter((data) => data.index === nextSlide)
						.map((slide) => (
							<div className={styles.next_slide}>
								<Image src={slide.url} width={150 * 1.618} height={150} />
							</div>
						))}
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
