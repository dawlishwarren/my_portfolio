import styles from "./navbar.module.scss";
import Link from "next/link";

const Navbar = () => {
	return (
		<nav aria-label="Navigation Bar" className={styles.navigation}>
			<Link href="/#about">
				<a className={styles.link}>About</a>
			</Link>
			<Link href="/#portfolio">
				<a className={styles.link}>Portfolio</a>
			</Link>
		</nav>
	);
};

export default Navbar;
