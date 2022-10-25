import React, { useRef } from "react";
import { motion, Variants } from "framer-motion";
import styles from "./timeline.module.scss";
import { useDimensions } from "../../utils/use-dimensions";

const timelineVariants: Variants = {
	offscreenRight: {
		x: 300,
	},
	offscreenLeft: (width = 0) => ({
		x: width >= 300 ? -300 : 300,
	}),
	onscreen: {
		x: 0,
		transition: {
			type: "spring",
			bounce: 0.4,
			duration: 2,
		},
	},
};

const Timeline = () => {
	const containerRef = useRef(null);
	const { width } = useDimensions(containerRef);
	console.log(width);
	return (
		<div className={styles.container} ref={containerRef}>
			<div className={styles.timeline}>
				<ul>
					<motion.li initial="offscreenRight" whileInView="onscreen">
						<motion.div
							className={styles.content_container}
							variants={timelineVariants}>
							<h3>Front end developer</h3>
						</motion.div>
					</motion.li>
					<motion.li
						initial="offscreenLeft"
						whileInView="onscreen"
						viewport={{ once: true, amount: 0.8 }}>
						<motion.div
							className={styles.content_container}
							variants={timelineVariants}>
							<h3>Creative</h3>
						</motion.div>
					</motion.li>
					<motion.li
						initial="offscreenRight"
						whileInView="onscreen"
						viewport={{ once: true, amount: 0.8 }}>
						<motion.div
							className={styles.content_container}
							variants={timelineVariants}>
							<h3>Self Taught</h3>
						</motion.div>
					</motion.li>
					<motion.li
						initial="offscreenLeft"
						whileInView="onscreen"
						viewport={{ once: true, amount: 0.8 }}>
						<motion.div
							className={styles.content_container}
							variants={timelineVariants}>
							<h3>Entertainer</h3>
						</motion.div>
					</motion.li>
					<motion.li
						initial="offscreenRight"
						whileInView="onscreen"
						viewport={{ once: true, amount: 0.8 }}>
						<motion.div
							className={styles.content_container}
							variants={timelineVariants}>
							<h3>Advocate</h3>
						</motion.div>
					</motion.li>
				</ul>
			</div>
		</div>
	);
};

export default Timeline;
