// React/Next/NPM
import { motion } from 'framer-motion';
import Link from 'next/link';
// Styles/Assets
import styles from './menuItem.module.scss';
// import { color1 } from '../../../styles/settings/_colors.module.scss';

const variants = {
	open: {
		x: 0,
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 },
		},
	},
	closed: {
		x: '-100%',
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 },
		},
	},
};

const colors = [
	'#eb4511',
	'#00a85f',
	'#f1db4b',
	'#278ea5',
	'#0586ff',
	'#0000a8',
];

const MenuItem = ({ i, name, href, icon }: any) => {
	const style = { borderBottom: `2px solid ${colors[i]}` };
	return (
		<motion.li
			className={styles.menu_item}
			variants={variants}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.95 }}>
			<div className={styles.border} />
			<div className={styles.content}>
				{icon && (
					<div className={styles.icon} style={style}>
						{icon}
					</div>
				)}
				<Link href={`#${href}`}>
					<a className={styles.link} style={{ color: colors[i] }}>
						{name}
						<motion.div
							className={styles.link_after}
							style={{
								backgroundColor: colors[i],
							}}
						/>
					</a>
				</Link>
			</div>
		</motion.li>
	);
};

export default MenuItem;
