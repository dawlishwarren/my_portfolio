// React/Next/NPM
import React, { useEffect, useState } from 'react';
import { MotionValue, m } from 'framer-motion';
// Styles/Assets
import styles from './progressEllipse.module.scss';
// Type Declarations
interface Props {
	progress: MotionValue<number>;
}

// Component
const ProgressEllipse = ({ progress }: Props) => {
	const [isHovered, setIsHovered] = useState(false);
	const getClassName = () => {
		return isHovered ? `${styles.active}` : `${styles.inactive}`;
	};

	useEffect(() => {
		// State change sets timeout
		if (!isHovered) {
			return;
		}
		const timeoutId = window.setTimeout(() => {
			// Timeout clears State
			setIsHovered(false);
		}, 1000);

		return () => {
			window.clearTimeout(timeoutId);
		};
	}, [isHovered]);
	// onMouseEnter = trigger
	const trigger = () => {
		// trigger sets State
		setIsHovered(true);
	};

	return (
		<div
			className={`${styles.container} ${getClassName()}`}
			onMouseEnter={trigger}>
			<svg
				id={styles.progress}
				className={styles.progress}
				viewBox='0 0 100 100'>
				<m.ellipse
					cx='40'
					cy='50'
					rx='24'
					ry='25'
					pathLength='1'
					className={styles.indicator}
					style={{ pathLength: progress }}
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
					ry='8'
					pathLength='1'
					className={styles.bg_inner}
				/>
			</svg>
		</div>
	);
};

export default ProgressEllipse;
