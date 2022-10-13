// Next
import Image from "next/image";
// Components
import MainHero from "../mainHero/mainHero";
import Socials from "../socials/Socials";
// Stylesheet and assets
import styles from "./main.module.scss";
import heroImg from "../../public/hero_image.png";
import Logo from "../../assets/aw.svg";
import ScrollDown from "../scrollDown/ScrollDown";

const Main = () => {
	return (
		<section className="scroll-area" id="main">
			<main className={styles.main_section}>
				<div className={styles.hero_container}>
					<MainHero />
				</div>
				<div className={styles.logo_container}>
					<Logo className={styles.logo} />
				</div>
				<div className={styles.socials_container}>
					<Socials />
				</div>
				<div className={styles.image_container}>
					<Image
						src={heroImg}
						alt="Picture of the author"
						placeholder="blur"
						layout="fill"
						objectFit="contain"
						className={styles.main_image}
					/>
				</div>
				<ScrollDown />
			</main>
		</section>
	);
};

export default Main;
