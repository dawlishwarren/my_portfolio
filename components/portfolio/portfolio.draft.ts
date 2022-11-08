import React from 'react';
interface SlideState {
	currentSlide: number;
	previousSlide: number;
	nextSlide: number;
}
const portfolio = () => {
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

	return (
		<div>
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
				.map((slide, i) => (
					<div className={styles.previous_slide} key={i}>
						<Image src={slide.url} width={150 * 1.618} height={150} />
					</div>
				))}

			{/* Current slide */}
			{carouselData
				.filter((data) => data.index === currentSlide)
				.map((slide, i) => (
					<div className={styles.slide} key={i}>
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
				.map((slide, i) => (
					<div className={styles.next_slide} key={i}>
						<Image src={slide.url} width={150 * 1.618} height={150} />
					</div>
				))}
		</div>
	);
};

export default portfolio;
