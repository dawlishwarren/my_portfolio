import Image from "next/image";
import heroImg from "../../public/hero_image.png";
import Logo from "../../assets/aw.svg";
import styles from "./main.module.scss";
import AnimatedTitle from "../animatedTitle/AnimatedTitle";
import Socials from "../socials/Socials";

const Main = () => {
	return (
		<>
			<main className={`scroll-area ${[styles.main_section]}`}>
				<div className={styles.main_container}>
					{/* Left hand side */}
					<div className={styles.logo_area}>
						{/* Site-wide buttons */}
						<div className={styles.buttons_square}>
							<span>Hamburger</span>
							<span>Theme</span>
							<span>Scroll</span>
						</div>
						{/* Logo and Socials */}
						<div className={styles.left_bottom}>
							{/* Logo */}
							<div className={styles.logo_container}>
								<Logo className={styles.logo} />
							</div>
							{/* Socials */}
							<div className={styles.left_bottom_right}>
								<Socials />
							</div>
						</div>
					</div>
					{/* Center (mob) */}
					<div className={styles.title_wrapper}>
						<AnimatedTitle str="Main" id="main" />
					</div>
					{/* Right hand side */}
					<div className={styles.mobile_text_area}>
						<h4>Hi, welcome to my website.</h4>
						<p>Scroll to find out more</p>
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
