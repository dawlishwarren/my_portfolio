import { NextPage } from 'next';
import Layout from '../components/layout/Layout';
import styles from '../styles/Home.module.scss';
import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import AnimatedTitle from '../components/animatedTitle/AnimatedTitle';

// Scroll X Progress on a container

const TestingPage: NextPage = () => {
	const ref = useRef(null);
	const { scrollXProgress } = useScroll({ container: ref });
	return (
		<Layout title='Alex Warren | Frontend Developer' inner={false}>
			<div className={styles.container}>
				<div className={styles.header_wrapper}>
					<AnimatedTitle str='My P' />
					<svg
						id={styles.progress}
						className={styles.progress}
						width='4rem'
						height='4rem'
						viewBox='0 0 100 100'>
						<motion.ellipse
							cx='40'
							cy='50'
							rx='25'
							ry='25'
							pathLength='1'
							className={styles.indicator}
							style={{ pathLength: scrollXProgress }}
						/>
						<ellipse
							cx='40'
							cy='50'
							rx='35'
							ry='36'
							pathLength='1'
							className={styles.bg_outer}
						/>
						<ellipse
							cx='40'
							cy='50'
							rx='12'
							ry='6'
							pathLength='1'
							className={styles.bg_inner}
						/>
					</svg>
					<AnimatedTitle str='rtfolio' />
				</div>

				<ul className={styles.ul} ref={ref}>
					<li className={styles.li}></li>
					<li className={styles.li}></li>
					<li className={styles.li}></li>
					<li className={styles.li}></li>
					<li className={styles.li}></li>
					<li className={styles.li}></li>
					<li className={styles.li}></li>
					<li className={styles.li}></li>
					<li className={styles.li}></li>
					<li className={styles.li}></li>
				</ul>
			</div>
		</Layout>
	);
};

export default TestingPage;
