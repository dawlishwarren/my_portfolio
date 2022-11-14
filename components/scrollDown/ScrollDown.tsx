import { CgArrowLongDown } from "react-icons/cg";
import styles from "./scrollDown.module.scss";

const ScrollDown = () => {
	return (
		<div className={styles.scroll_down}>
			{/* <FiCornerLeftDown /> */}
			<CgArrowLongDown />
			<p>(Scroll down to find out more)</p>
			<CgArrowLongDown />
		</div>
	);
};

export default ScrollDown;
