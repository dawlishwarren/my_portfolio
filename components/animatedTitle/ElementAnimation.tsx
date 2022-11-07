// React/Next/NPM
import React, { useState, useEffect } from 'react';
// Styles/Assets
import styles from './animatedTitle.module.scss';

type Props = {
	timing?: number;
	string: string;
};

const ElementAnimation = ({ timing, string }: Props) => {
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
		}, timing);

		return () => {
			window.clearTimeout(timeoutId);
		};
	}, [isHovered, timing]);
	const trigger = () => {
		setIsHovered(true);
	};

	return (
		<span onMouseEnter={trigger} className={getClassName()}>
			{string}
		</span>
	);
};

export default ElementAnimation;
