// React/Next/NPM
import React, { useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/legacy/image';
import { AnimatePresence, m, useScroll } from 'framer-motion';
// Components
import AnimatedTitle from '../animatedTitle/AnimatedTitle';
import Modal from '../modal/Modal';
// Styles/Assets
import styles from './portfolio.module.scss';
import tourism from '../../public/tourism.png';
import directory from '../../public/directory.png';
import logo from '../../public/logo.png';
import consultation from '../../public/consultation.png';
import colour_guesser from '../../public/colour_guesser.png';
import { AiFillGithub } from 'react-icons/ai';
import ProgressEllipse from '../progressEllipse/ProgressEllipse';
// Prop Types
interface Carousel {
	title: string;
	url: StaticImageData;
	index: number;
	alt: string;
	text?: JSX.Element;
	repo?: string;
	link?: string;
}
// Data to map
const carouselData = [
	{
		index: 0,
		title: 'Vanilla HTML',
		url: tourism,
		alt: 'HTML Tourism website homepage screenshot',
		text: (
			<p className={styles.text}>
				A tourism website built for my hometown created using{' '}
				<span className={styles.strong}>vanilla HTML, CSS and JavaScript</span>.{' '}
				This was my first project after completing Udemy courses.
			</p>
		),
		repo: 'https://github.com/dawlishwarren/visit_budleigh',
		link: 'http://test-website-stuff-w-alex.s3-website.eu-west-2.amazonaws.com/index.html',
	},
	{
		index: 1,
		title: 'Custom UI',
		url: directory,
		alt: 'Business directory UI',
		text: (
			<p className={styles.text}>
				This is a full-stack Next.js business directory app. Built with MongoDB,
				AWS S3 and Next.js, it showcases a{' '}
				<span className={styles.strong}>fully custom UI.</span>
			</p>
		),
		link: 'https://bscc-git-main-dawlishwarren.vercel.app/',
	},
	{
		index: 2,
		title: 'SVG Design',
		url: logo,
		alt: 'Website logo',
		text: (
			<p className={styles.text}>
				Perhaps you&apos;ve already spotted the Favicon in your browser tab.
				Inspired by the unofficial JavaScript logo designed by Chris Williams,
				the logo for my site was created in Figma and one of the{' '}
				<span className={styles.strong}>many uses of SVGs</span> dotted
				throughout my site.
			</p>
		),
	},
	{
		index: 3,
		title: 'Testing',
		url: colour_guesser,
		alt: 'A colour guessing app',
		text: (
			<p className={styles.text}>
				A simple app built with
				<span className={styles.strong}> TDD </span>in mind. I designed the
				function that generates the HEX first, tested it in Jest and once happy
				that it works, built out the front end.
			</p>
		),
		repo: 'https://github.com/dawlishwarren/colour-game-with-tests',
		link: 'https://dawlishwarren.github.io/colour-game-with-tests/',
	},
	{
		index: 4,
		title: 'Accessibility & Consultation',
		url: consultation,
		alt: 'Screenshot of tourism website',
		text: (
			<p className={styles.text}>
				The working version of the hometown tourism website featured on the
				first slide,{' '}
				<span className={styles.strong}>
					I advised the client on accessibility considerations
				</span>
				, specifically meeting WCAG standards of perceivability and creating an
				understandable site architecture and navigation system
			</p>
		),
		link: 'https://www.lovebudleigh.co.uk/',
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
		text: <></>,
		repo: '',
		link: '',
	});
	const close = () => setModalOpen(false);

	const ref = useRef(null);
	const { scrollXProgress } = useScroll({ container: ref });

	return (
		<section
			id='portfolio'
			className={`scroll-area ${[styles.portfolio_section]}`}>
			{/* HEADER WITH PROGRESS SVG */}
			<div className={styles.header_wrapper}>
				<AnimatedTitle str='My P' />
				<ProgressEllipse progress={scrollXProgress} />
				<AnimatedTitle str='rtfolio' />
			</div>
			<div className={styles.carousel_container}>
				<div className={styles.carousel_header}>
					<h2 className={styles.carousel_header_main}>Take a scroll, </h2>
					<span className={styles.carousel_header_secondary}>see my work.</span>
				</div>
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
									width={700}
									height={350}
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
											<a
												href={activePanel.repo}
												target='_blank'
												rel='noreferrer'>
												<button className={styles.modal_button}>
													Check out the repo
													<AiFillGithub size={20} />
												</button>
											</a>
										)}
										{activePanel.link && (
											<a
												href={activePanel.link}
												target='_blank'
												rel='noreferrer'>
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
		</section>
	);
};

export default Portfolio;
