// Next
import Image from "next/image";
// Components
import MainHero from "../mainHero/mainHero";
// Stylesheet and assets
import styles from "./main.module.scss";
import heroImg from "../../public/hero_image.png";
import Logo from "../../assets/aw.svg";
import ScrollDown from "../scrollDown/ScrollDown";
import ColorBurn from "../colorBurn/ColorBurn";

const Main = () => {
	return (
		// Wrapper
		<section id="main" className="scroll-area">
			<main className={styles.main_section}>
				{/* Content Container */}
				<div className={styles.content_container}>
					<div className={styles.title_container}>
						<ColorBurn>Hello, my name is Alex Warren.</ColorBurn>
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
				</div>
				{/* Gradient FullScreen */}
				<div className={styles.gradient_container}>
					<MainHero />
				</div>
				{/* Scroll */}
				<ScrollDown />
			</main>
		</section>
	);
};

export default Main;
