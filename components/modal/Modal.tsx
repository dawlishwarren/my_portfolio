// React/Next/NPM
import { motion } from 'framer-motion';
// Components
import Backdrop from '../backdrop/Backdrop';
// Styles/Assets
import styles from './modal.module.scss';

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

interface Props {
	children: any;
	handleClose: React.MouseEventHandler;
	modalOpen: boolean;
}

const SkillModal = ({ modalOpen, handleClose, children }: Props) => {
	return (
		<Backdrop onClick={handleClose}>
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
		</Backdrop>
	);
};

export default SkillModal;
