import styles from './navbar.module.scss';
import Link from 'next/link';

const Navbar = () => {
	const links = [
		{ name: 'About Me', href: 'about' },
		{ name: 'Portfolio', href: 'portfolio' },
		{ name: 'Skills', href: 'skills' },
		{ name: 'Contact Me', href: 'contact' },
		{ name: 'Blog', href: 'blog' },
	];
	return (
		<nav aria-label='Navigation Bar' className={styles.navigation}>
			<ul className={styles.links_list}>
				{links.map((link, index) => (
					<Link key={index} href={`#` + link.href}>
						<a className={styles.link}>{link.name}</a>
					</Link>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
