import Image from 'next/image';
import heroImg from '../../public/hero_image.png';
import Logo from '../../assets/aw.svg';
import styles from './main.module.scss';

const Main = () => {
	return (
		<main>
			<Logo />
			<div className={styles.title_wrapper}>
				<h1 className={styles.title}>Alex Warren // Developer</h1>
			</div>
			<div className={styles.image_container}>
				<Image
					src={heroImg}
					alt='Picture of the author'
					placeholder='blur'
					layout='responsive'
					className={`${[styles.border_circle, styles.image].join(' ')}`}
				/>
			</div>
		</main>
	);
};

export default Main;
