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
	return (
		<div className={styles.color_burn_wrapper}>
			<h1 className={styles.burn_element}>{children}</h1>
			<div className={styles.burn_element_burn} aria-hidden>
				{children}
			</div>
			<div className={styles.burn_element} data-overlay aria-hidden="true">
				{children}
			</div>
		</div>
	);
};

export default ColorBurn;
