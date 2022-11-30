// React/Next/NPM
import React, { useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { AnimatePresence, m, useScroll } from "framer-motion";
// Components
import AnimatedTitle from "../animatedTitle/AnimatedTitle";
import Modal from "../modal/Modal";
// Styles/Assets
import styles from "./portfolio.module.scss";
import tourism from "../../public/tourism.png";
import directory from "../../public/directory.png";
import logo from "../../public/logo.png";
import portfolio from "../../public/portfolio.png";
import consultation from "../../public/consultation.png";
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
		title: "Vanilla HTML",
		url: tourism,
		alt: "HTML Tourism website homepage screenshot",
	},
	{
		index: 1,
		title: "Custom UI",
		url: directory,
		alt: "Business directory UI",
	},
	{ index: 2, title: "SVG Design", url: logo, alt: "Website logo" },
	{
		index: 3,
		title: "Responsive Layout",
		url: portfolio,
		alt: "Landing page with responsive layout",
	},
	{
		index: 4,
		title: "Consultation",
		url: consultation,
		alt: "Screenshot of tourism website",
	},
];

const Portfolio = () => {
	// Modal State
	const [modalOpen, setModalOpen] = useState(false);
	const [activePanel, setActivePanel] = useState<Carousel>({
		title: "",
		url: { src: "", height: 0, width: 0 },
		index: 0,
		alt: "",
	});
	const close = () => setModalOpen(false);

	const ref = useRef(null);
	const { scrollXProgress } = useScroll({ container: ref });

	return (
		<section
			id="portfolio"
			className={`scroll-area ${[styles.portfolio_section]}`}>
			{/* HEADER WITH PROGRESS SVG */}
			<div className={styles.header_wrapper}>
				<AnimatedTitle str="My P" />
				<svg
					id={styles.progress}
					className={styles.progress}
					width="min(8vw, 4rem)"
					height="min(10vh, 4rem)"
					viewBox="0 0 100 100">
					<m.ellipse
						cx="40"
						cy="50"
						rx="24"
						ry="25"
						pathLength="1"
						className={styles.indicator}
						style={{ pathLength: scrollXProgress }}
					/>
					<ellipse
						cx="40"
						cy="50"
						rx="35"
						ry="36"
						pathLength="1"
						className={styles.bg_outer}
					/>
					<ellipse
						cx="40"
						cy="50"
						rx="12"
						ry="8"
						pathLength="1"
						className={styles.bg_inner}
					/>
				</svg>
				<AnimatedTitle str="rtfolio" />
			</div>
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
							<Image
								className={styles.slide_image}
								src={slide.url}
								width={300}
								height={500}
								objectFit={"scale-down"}
								alt={slide.alt}
								priority
							/>
						</m.li>
					))}
				</ul>
				<AnimatePresence initial={false} mode="wait">
					{modalOpen && (
						<Modal modalOpen={modalOpen} handleClose={close}>
							<div>{activePanel.title}</div>
							<Image
								className={styles.slide_image}
								src={activePanel.url}
								width={300}
								height={500}
								objectFit={"scale-down"}
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
