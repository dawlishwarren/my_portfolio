import React from 'react';
import { motion } from 'framer-motion';
import styles from './backdrop.module.scss';

interface Props {
	onClick: React.MouseEventHandler;
	children: any;
}

const Backdrop = ({ children, onClick }: Props) => {
	return (
		<motion.div
			className={styles.backdrop}
			onClick={onClick}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}>
			{children}
		</motion.div>
	);
};

export default Backdrop;