import Image from "next/image";
import heroImg from "../../public/hero_image.png";
import Logo from "../../assets/aw.svg";
import styles from "./main.module.scss";
import AnimatedTitle from "../animatedTitle/AnimatedTitle";

const Main = () => {
	return (
		<>
			<main className={`scroll-area ${[styles.main_section]}`}>
				<div className={styles.title_wrapper}>
					<AnimatedTitle str="Alex Warren // Developer" />
				</div>
				<div className={styles.main_container}>
					{/* Left hand side */}
					<div className={styles.left}>
						<div>
							<p>Square</p>
						</div>
						<div className={styles.left_bottom}>
							<div className={styles.logo_container}>
								<Logo className={styles.logo} />
							</div>
							<div className={styles.left_bottom_right}>
								<div className={styles.icons_container}>Icons</div>
							</div>
						</div>
					</div>
					{/* Right hand side */}
					<div className={styles.right}>
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
