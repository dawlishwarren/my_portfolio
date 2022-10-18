import { m } from "framer-motion";
import Backdrop from "../Backdrop/Backdrop";
import styles from "./modal.module.scss";

const dropIn = {
	hidden: {
		y: "-100vh",
		opacity: 0,
	},
	visible: {
		y: "0",
		opacity: 1,
		transition: {
			duration: 0.1,
			type: "Spring",
			damping: 25,
			stiffness: 500,
		},
	},
	exit: {
		y: "100vh",
		opacity: 0,
	},
};

interface Props {
	text: string | null;
	handleClose: React.MouseEventHandler;
}

const Modal = ({ handleClose, text }: Props) => {
	return (
		<Backdrop onClick={handleClose}>
			<m.div
				onClick={(e) => e.stopPropagation()}
				className={styles.modal}
				variants={dropIn}
				initial="hidden"
				animate="visible"
				exit="exit">
				<p>{text}</p>
				<button onClick={handleClose}>Close</button>
			</m.div>
		</Backdrop>
	);
};

export default Modal;
