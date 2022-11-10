// React/Next/NPM
import { motion } from 'framer-motion';
import ModalBackground from '../modalBackground/ModalBackground';
// Components
// Styles/Assets
import styles from './modal.module.scss';
// Prop types
interface Props {
	children: any;
	handleClose: React.MouseEventHandler;
	modalOpen: boolean;
}

// Motion variants
const dropIn = {
	hidden: {
		y: '-100vh',
		opacity: 0,
	},
	visible: {
		y: '0',
		opacity: 1,
		transition: {
			duration: 1,
			type: 'Spring',
			damping: 25,
			stiffness: 500,
		},
	},
	exit: {
		y: '100vh',
		opacity: 0,
	},
};

const Modal = ({ modalOpen, handleClose, children }: Props) => {
	return (
		<ModalBackground onClick={handleClose}>
			<motion.div
				onClick={(e) => e.stopPropagation()}
				className={styles.modal}
				variants={dropIn}
				initial='hidden'
				animate='visible'
				exit='exit'
				drag={true}>
				{children}
				<div className={styles.close_wrapper}>
					<button onClick={handleClose} className={styles.close_button}>
						Close
					</button>
				</div>
			</motion.div>
		</ModalBackground>
	);
};

export default Modal;
