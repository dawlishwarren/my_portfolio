import Link from 'next/link';
import styles from './homeButton.module.scss';

const HomeButton = () => {
	return (
		<Link href='/'>
			<button className={styles.button}>Take me home</button>
		</Link>
	);
};

export default HomeButton;
