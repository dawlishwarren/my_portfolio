import styles from "./animatedTitle.module.scss";
import React, { MouseEvent, useState } from "react";
import ElementAnimation from "./ElementAnimation";

type Props = {
	str: String;
};

type E = MouseEvent<HTMLSpanElement>;

const AnimatedTitle = (props: Props) => {
	const { str } = props;
	const arrayStr = str.split("");
	console.log(arrayStr);

	return (
		<h1>
			{arrayStr.map((s, i) => (
				<ElementAnimation timing={1500} children={s} />
			))}
		</h1>
	);
};

export default AnimatedTitle;
