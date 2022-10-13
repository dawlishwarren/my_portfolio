// Takes in a string
// Repeats it 3 times,
// Once as the element passed through (icon, h1, p etc.)
// Once with a color burn
// Another with an overlay

// Props are children: any

import { ReactNode } from "react";
import styles from "./colorBurn.module.scss";
interface Props {
	children: ReactNode;
}
const ColorBurn = ({ children }: Props) => {
	<div className={styles.color_burn_wrapper}>{children}</div>;
};

export default ColorBurn;
