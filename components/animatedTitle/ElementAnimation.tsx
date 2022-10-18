import React, { useState, useEffect } from "react";
import styles from "./animatedTitle.module.scss";

type Props = {
	timing?: number;
	children: string;
};

const ElementAnimation = ({ timing, children }: Props) => {
	const [isHovered, setIsHovered] = useState(false);
	const style = {
		display: "inline",
		textDecoration: isHovered ? "underline 1rem yellow" : "none",
	};

	const getClassName = () => {
		return isHovered ? `${styles.active}` : "none";
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
			{children}
		</span>
	);
};

export default ElementAnimation;
