import React from 'react';

const portfolio = () => {
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
