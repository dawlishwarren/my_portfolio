// React and Module imports
import React, { useRef } from 'react';
import { m, useCycle } from 'framer-motion';
// Components
import MenuToggle from '../menuToggle/MenuToggle';
import Sidebar from '../sidebar/Sidebar';
// Utils and Styles
import { useDimensions } from '../../utils/use-dimensions';
import styles from './navbar.module.scss';

const Navbar = () => {
	const [isOpen, toggleOpen] = useCycle(false, true);
	const containerRef = useRef(null);
	const { height } = useDimensions(containerRef);
	return (
		<m.nav
			style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
			initial={false}
			animate={isOpen ? 'open' : 'closed'}
			custom={height}
			ref={containerRef}
			className={styles.nav}
			aria-label='Navigation-bar'>
			<Sidebar toggle={() => toggleOpen()} />
			<MenuToggle type='navigation' toggle={() => toggleOpen()} />
		</m.nav>
	);
};

export default Navbar;
