import { MotionValue, m } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import styles from './progressEllipse.module.scss';

interface Props {
	progress: MotionValue<number>;
}

const ProgressEllipse = ({ progress }: Props) => {
	const [isHovered, setIsHovered] = useState(false);
	const getClassName = () => {
		return isHovered ? `${styles.active}` : `${styles.inactive}`;
	};

	useEffect(() => {
		if (!isHovered) {
			return;
		}
		const timeoutId = window.setTimeout(() => {
			setIsHovered(false);
		}, 1000);

		return () => {
			window.clearTimeout(timeoutId);
		};
	}, [isHovered]);
	const trigger = () => {
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
