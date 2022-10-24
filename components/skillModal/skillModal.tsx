// React/Next/NPM
import { motion } from "framer-motion";
// Components
import Backdrop from "../Backdrop/Backdrop";
// Styles/Assets
import styles from "./skillModal.module.scss";
import { IconType } from "react-icons/lib";

const dropIn = {
	hidden: {
		y: "-100vh",
		opacity: 0,
	},
	visible: {
		y: "0",
		opacity: "1",
		transition: {
			duration: 1,
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
	name: string;
	Icon: IconType;
	text?: string;
	when?: number;
	where?: string;
	handleClose: React.MouseEventHandler;
	modalOpen: boolean;
}

const SkillModal = ({
	modalOpen,
	handleClose,
	name,
	Icon,
	text,
	when,
	where,
}: Props) => {
	return (
		<Backdrop onClick={handleClose}>
			<motion.div
				onClick={(e) => e.stopPropagation()}
				className={styles.modal}
				variants={dropIn}
				initial="hidden"
				animate="visible"
				exit="exit"
				drag={true}>
				<div className={styles.header}>
					<h2 className={styles.title}>{name}</h2>
					<Icon className={styles.icon} />
				</div>
				<div className={styles.text_container}>
					<p className={styles.when}>Since: {when}</p>
					<p className={styles.where}>Where: {where}</p>
					<p className={styles.paragraph}>{text}</p>
				</div>
				<div className={styles.close_wrapper}>
					<button onClick={handleClose} className={styles.close_button}>
						Close
					</button>
				</div>
			</motion.div>
		</Backdrop>
	);
};

export default SkillModal;
