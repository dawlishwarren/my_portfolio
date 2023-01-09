import React from 'react';

const Carousel = () => {
	return (
		<div className={styles.carousel_container}>
			<ul className={styles.carousel} ref={ref}>
				{carouselData.map((slide, index) => (
					<m.li
						key={index}
						className={styles.list_item}
						onClick={() => {
							modalOpen ? setModalOpen(false) : setModalOpen(true);
							setActivePanel(slide);
						}}>
						<h2 className={styles.slide_title}>{slide.title}</h2>
						<div className={styles.slide_image}>
							<Image
								src={slide.url}
								width={650}
								height={300}
								objectFit='scale-down'
								alt={slide.alt}
								placeholder='empty'
							/>
						</div>
					</m.li>
				))}
			</ul>
			<AnimatePresence initial={false} mode='wait'>
				{modalOpen && (
					<Modal modalOpen={modalOpen} handleClose={close}>
						<div className={styles.modal_wrapper}>
							<div className={styles.header}>
								<h1 className={styles.title}>{activePanel.title}</h1>
							</div>
							<div className={styles.modal_content}>
								<div className={styles.slide_image}>
									<Image
										src={activePanel.url}
										width={600}
										height={500}
										objectFit={'scale-down'}
										alt={activePanel.alt}
										placeholder='empty'
									/>
								</div>
								<div className={styles.text_wrapper}>
									<div className={styles.modal_text}>
										<p>{activePanel.text}</p>
									</div>
									{activePanel.repo && (
										<a href={activePanel.repo} target='_blank' rel='noreferrer'>
											<button className={styles.modal_button}>
												Check out the repo
												<AiFillGithub size={20} />
											</button>
										</a>
									)}
									{activePanel.link && (
										<a href={activePanel.link} target='_blank' rel='noreferrer'>
											<button className={styles.modal_button}>
												See the site
											</button>
										</a>
									)}
								</div>
							</div>
						</div>
					</Modal>
				)}
			</AnimatePresence>
		</div>
	);
};

export default Carousel;
