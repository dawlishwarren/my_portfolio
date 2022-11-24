// React/Next/NPM
import { m } from 'framer-motion';
// Styles/Assets
import { IoPersonAddSharp } from 'react-icons/io5';
import styles from './menuToggle.module.scss';
// Prop Types
interface Props {
	toggle: any;
	type: string;
	size?: number;
}

const Path = (props: any) => (
	<m.path fill='transparent' strokeWidth='3' strokeLinecap='round' {...props} />
);

const MenuToggle = ({ toggle, type, size }: Props) => (
	<>
		{/* If Socials menu toggle: */}
		{type === 'social' && (
			<button className={styles.social_button} onClick={toggle}>
				<IoPersonAddSharp size={size} />
			</button>
		)}
		{/* If Navbar menu toggle: */}
		{type === 'navigation' && (
			<button className={styles.nav_button} onClick={toggle}>
				{/* Hamburger menu SVG */}
				<svg width='23' height='23' viewBox='0 0 23 23'>
					<Path
						variants={{
							closed: { d: 'M 2 2.5 L 20 2.5' },
							open: { d: 'M 3 16.5 L 17 2.5' },
						}}
					/>
					<Path
						d='M 2 9.423 L 20 9.423'
						variants={{
							closed: { opacity: 1 },
							open: { opacity: 0 },
						}}
						transition={{ duration: 0.1 }}
					/>
					<Path
						variants={{
							closed: { d: 'M 2 16.346 L 20 16.346' },
							open: { d: 'M 3 2.5 L 17 16.346' },
						}}
					/>
				</svg>
			</button>
		)}
	</>
);

export default MenuToggle;
