import styles from "./animatedTitle.module.scss";
import React from "react";
import ElementAnimation from "./ElementAnimation";

type Props = {
	str: string;
	size?: string;
	id?: string;
};

const AnimatedTitle = (props: Props) => {
	const { str, id, size } = props;
	const arrayStr = str.split("");
	arrayStr.join(" ").split("");

	return (
		<div className={styles.title_container}>
			<h1
				id={id}
				className={styles.title}
				style={{ fontSize: size ? size : "5rem" }}>
				{arrayStr.map((s, i) => (
					<ElementAnimation timing={1000} string={s} key={i} />
				))}
			</h1>
		</div>
	);
};

export default AnimatedTitle;