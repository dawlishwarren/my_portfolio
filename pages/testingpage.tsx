import { NextPage } from "next";
import Layout from "../components/layout/Layout";
import styles from "../styles/Home.module.scss";

// React/Next/NPM
import React, { useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { AnimatePresence, m, useScroll } from "framer-motion";
// Components

// Styles/Assets
import tourism from "../public/tourism.png";
import directory from "../public/directory.png";
import logo from "../public/logo.png";
import portfolio from "../public/portfolio.png";
import consultation from "../public/consultation.png";
import { AiFillGithub } from "react-icons/ai";
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
		title: "Vanilla HTML",
		url: tourism,
		alt: "HTML Tourism website homepage screenshot",
		text: (
			<p className={styles.text}>
				A tourism website built for my hometown created using{" "}
				<span className={styles.strong}>vanilla HTML, CSS and JavaScript</span>.{" "}
				This was my first project after completing Udemy courses.
			</p>
		),
		repo: "https://github.com/dawlishwarren/visit_budleigh",
	},
	{
		index: 1,
		title: "Custom UI",
		url: directory,
		alt: "Business directory UI",
		text: (
			<p className={styles.text}>
				This is a full-stack Next.js business directory app. Built with MongoDB,
				AWS S3 and Next.js, it showcases a{" "}
				<span className={styles.strong}>fully custom UI.</span>
			</p>
		),
		repo: "https://github.com/dawlishwarren/BSCC",
	},
	{
		index: 2,
		title: "SVG Design",
		url: logo,
		alt: "Website logo",
		text: (
			<p className={styles.text}>
				Perhaps you&apos;ve already spotted the Favicon in your browser tab.
				Inspired by the unofficial JavaScript logo designed by Chris Williams,
				the logo for my site was created in Figma and one of the{" "}
				<span className={styles.strong}>many uses of SVGs</span> dotted
				throughout my site.
			</p>
		),
	},
	{
		index: 3,
		title: "Responsive Layout",
		url: portfolio,
		alt: "Landing page with responsive layout",
		text: (
			<p className={styles.text}>
				My first draft of a portfolio website. Heavily inspired by the art
				language of Piet Mondrian and of layouts that make use of the principles
				of the Golden Ratio. While only a sketch it is a good example of a{" "}
				<span className={styles.strong}>fully responsive</span> design.
			</p>
		),
	},
	{
		index: 4,
		title: "Consultation",
		url: consultation,
		alt: "Screenshot of tourism website",
		text: (
			<p className={styles.text}>
				The working version of the hometown tourism website featured on the
				first slide, I was heavily involved in the creation of this site. It
				involved <span className={styles.strong}>working with the client</span>{" "}
				to better identify what the brief was, and how to overcome issues
				related to{" "}
				<span className={styles.strong}>
					SEO, authentication requirements, and UI design choices.
				</span>
			</p>
		),
		link: "https://www.lovebudleigh.co.uk/",
	},
];
// Scroll X Progress on a container

const TestingPage: NextPage = () => {
	const ref = useRef(null);
	const { scrollXProgress } = useScroll({ container: ref });
	console.log(scrollXProgress);
	return (
		<Layout title="Alex Warren | Frontend Developer" inner={false}>
			<section className={styles.portfolio_section}>
				<div className={styles.cards_shelf}>
					<div className={styles.shelf_header}>Take a look at my work</div>
					<div className={styles.cards_shelf_scroller}>
						<div className={styles.cards_scroller_crop}>
							<div className={styles.cards_scroller_content}>
								<ul className={styles.cards_scroller_platter} ref={ref}>
									{carouselData.map((slide, index) => (
										<m.li key={index} className={styles.list_item}>
											<div className={styles.cards_scroller_itemview}>
												<div className={styles.card}>
													<div className={styles.card_content}>
														<h2 className={styles.slide_title}>
															{slide.title}
														</h2>
														<div className={styles.slide_image}>
															<Image
																src={slide.url}
																width={650}
																height={300}
																objectFit="scale-down"
																alt={slide.alt}
																placeholder="empty"
															/>
														</div>
													</div>
												</div>
											</div>
										</m.li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default TestingPage;
