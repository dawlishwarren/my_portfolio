import { CgArrowLongDown } from "react-icons/cg";
import styles from "./scrollDown.module.scss";

const ScrollDown = () => {
	return (
		<div className={styles.scroll_down}>
			{/* <FiCornerLeftDown /> */}
			<CgArrowLongDown />
			<p>(Scroll down to learn all about me)</p>
			<CgArrowLongDown />
		</div>
	);
};

export default ScrollDown;
