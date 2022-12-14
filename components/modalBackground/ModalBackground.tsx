// React/Next/NPM
import React from 'react';
import { m } from 'framer-motion';
// Styles/Assets
import styles from './modalBackground.module.scss';
// Prop types
interface Props {
	onClick: React.MouseEventHandler;
	children: any;
}

// Backdrop for a modal component
const ModalBackground = ({ onClick, children }: Props) => {
	return (
		<m.div
			className={styles.backdrop}
			onClick={onClick}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}>
			{children}
		</m.div>
	);
};

export default ModalBackground;
