// React/Next/NPM
import { motion } from "framer-motion";
import Link from "next/link";
// Styles/Assets
import styles from "./menuItem.module.scss";
import hoverStyles from "../../styles/hover.module.scss";
// import { color1 } from '../../../styles/settings/_colors.module.scss';

const variants = {
	open: {
		y: 0,
		x: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 },
		},
	},
	closed: {
		y: 50,
		x: -50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 },
		},
	},
};

const colors = [
	"#0586ff",
	"#278ea5",
	"#00a85f",
	"#cab111",
	"#c3423f",
	"#eb4511",
];

const MenuItem = ({ i, name, href, icon }: any) => {
	return (
		// Link for Navigation
		<Link href={`#${href}`}>
			<motion.li
				className={`${styles.menu_item} ${hoverStyles.menu_item}`}
				style={{ backgroundColor: colors[i] }}
				variants={variants}
				whileHover={{ scale: 1.02 }}
				whileTap={{ scale: 0.95 }}>
				{/* Border */}
				<div className={hoverStyles.menu_item_border} />
				{/* Content */}
				<div className={styles.menu_item_content}>
					{/* Icon */}
					{icon && (
						<div
							className={styles.icon}
							style={{ border: `2px solid ${colors[i]}` }}>
							{icon}
						</div>
					)}
					{/* Link */}
					<a className={styles.link}>
						{name}
						<motion.div
							className={styles.link_after}
							style={{
								backgroundColor: "white",
								color: "white",
							}}
						/>
					</a>
				</div>
			</motion.li>
		</Link>
	);
};

export default MenuItem;
