// React/Next/NPM
import { motion } from "framer-motion";
import Link from "next/link";
// Styles/Assets
import styles from "./menuItem.module.scss";

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
		x: "-100%",
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 },
		},
	},
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

const MenuItem = ({ i, name, href, icon }: any) => {
	const style = { border: `2px solid ${colors[i]}` };
	return (
		<>
			<motion.li
				className={styles.li}
				variants={variants}
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.95 }}>
				<div className={styles.icon} style={style}>
					{icon}
				</div>
				<Link href={`#${href}`}>
					<a className={styles.link}>
						{name}
						<motion.div
							className={styles.link_after}
							style={{
								backgroundColor: colors[i],
							}}
						/>
					</a>
				</Link>
			</motion.li>
		</>
	);
};

export default MenuItem;
