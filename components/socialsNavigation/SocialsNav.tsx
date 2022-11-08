// React/Next/NPM
import React, { useRef } from 'react';
import { motion, useCycle } from 'framer-motion';
import { useDimensions } from '../../utils/use-dimensions';
// Components
import SocialsSidebar from '../sidebar/SocialsSidebar';
import MenuToggle from '../menuToggle/MenuToggle';
// Styles/Assets
import styles from './socials.module.scss';

const Socials = () => {
	const [isOpen, toggleOpen] = useCycle(false, true);
	const containerRef = useRef(null);
	const { height } = useDimensions(containerRef);
	return (
		<motion.nav
			style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
			initial={false}
			animate={isOpen ? 'open' : 'closed'}
			className={styles.nav}
			custom={height}
			ref={containerRef}>
			<SocialsSidebar />
			<MenuToggle type='social' size={30} toggle={() => toggleOpen()} />
		</motion.nav>
	);
};

export default Socials;
