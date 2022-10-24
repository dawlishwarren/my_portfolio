// React/Next/NPM
import { ReactNode } from "react";
// Styles/Assets
import styles from "./colorBurn.module.scss";

interface Props {
	children: ReactNode;
}
const ColorBurn = ({ children }: Props) => {
	return (
		// Wrapper
		<div className={styles.color_burn_wrapper}>
			{/* Header */}
			<h1 className={styles.burn_element}>{children}</h1>
			{/* Color burn underlay */}
			<div className={styles.burn_element_burn} aria-hidden="true">
				{children}
			</div>
			{/* High opacity overlay */}
			<div className={styles.burn_element} data-overlay aria-hidden="true">
				{children}
			</div>
		</div>
	);
};

export default ColorBurn;
