import React, { useState, useEffect } from "react";

type Props = {
	timing?: number;
	children: string | " ";
};

const ElementAnimation = ({ timing, children }: Props) => {
	const [isHovered, setIsHovered] = useState(false);
	const style = {
		display: "inline-block",
		textDecoration: isHovered ? "underline" : "none",
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
		<span onMouseEnter={trigger} style={style}>
			{children}
		</span>
	);
};

export default ElementAnimation;
