// React/Next/NPM
import React, { useState, useEffect } from 'react';
// Styles/Assets
import styles from './animatedTitle.module.scss';
// Prop types
type Props = {
	timing?: number;
	string: string;
};

// Component takes in timeout value and string
const ElementAnimation = ({ timing, string }: Props) => {
	// State for whether element is hovered
	const [isHovered, setIsHovered] = useState(false);
	// Checks state and conditionally returns active or inactive
	const getClassName = () => {
		return isHovered ? `${styles.active}` : `${styles.inactive}`;
	};

	useEffect(() => {
		// If not hovered, return
		if (!isHovered) {
			return;
		}

		// If it is hovered:
		// Timing brought in from props, set timeout and reset state at end
		const timeoutId = window.setTimeout(() => {
			setIsHovered(false);
		}, timing);

		return () => {
			window.clearTimeout(timeoutId);
		};
	}, [isHovered, timing]);

	// onMouseEnter sets state to true
	const trigger = () => {
		setIsHovered(true);
	};

	return (
		// Trigger sets useEffect timeout
		<span onMouseEnter={trigger} className={getClassName()}>
			{string}
		</span>
	);
};

export default ElementAnimation;
