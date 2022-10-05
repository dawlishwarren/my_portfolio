import Image from "next/image";
import heroImg from "../../public/hero_image.png";
import Logo from "../../assets/aw.svg";
import styles from "./main.module.scss";
import AnimatedTitle from "../animatedTitle/AnimatedTitle";

const Main = () => {
	return (
		<>
			<main className={`scroll-area ${[styles.main_section]}`}>
				<div className={styles.main_container}>
					{/* Left hand side */}
					<div className={styles.logo_area}>
						<div className={styles.left_bottom}>
							<div className={styles.logo_container}>
								<Logo className={styles.logo} />
							</div>
							<div className={styles.left_bottom_right}>
								<div className={styles.icons_container}>Icons</div>
							</div>
						</div>
					</div>
					{/* Center (mob) */}
					<div className={styles.title_wrapper}>
						<AnimatedTitle str="Alex Warren // Developer" id="main" />
					</div>
					{/* Right hand side */}
					<div className={styles.mobile_text_area}>
						<p>Hi, welcome to my website</p>
					</div>
					<div className={styles.image_area}>
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
				</div>
			</main>
		</>
	);
};

export default Main;
