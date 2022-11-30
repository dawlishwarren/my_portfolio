import { BsArrowDownCircle } from "react-icons/bs";
import styles from "./scrollDown.module.scss";

interface Props {
	href: string;
}

const ScrollDown = ({ href }: Props) => {
	return (
		<div className={styles.scroll_down}>
			<a href={href}>
				<span></span>
			</a>
		</div>
	);
};

export default ScrollDown;
