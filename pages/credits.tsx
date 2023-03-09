// React/Next/NPM
import Link from "next/link";
// Components
import BlobBackground from "../components/blobBackground/BlobBackground";
import HomeButton from "../components/homeButton/HomeButton";
import Layout from "../components/layout/Layout";
// Styles/Assets
import styles from "../styles/Credits.module.scss";
const credits = () => {
	return (
		<Layout title="Credits Page" inner>
			<BlobBackground>
				<div className={styles.page_wrapper}>
					<HomeButton />

					<ul className={styles.credits_list}>
						<li className={styles.credit}>
							<h3 className={styles.credit_title}>SVG Draw on Scroll</h3>
							<p className={styles.credit_description}>
								{" "}
								Utilising{" "}
								<Link
									className={styles.link}
									href="https://codesandbox.io/s/framer-motion-usescroll-element-scrolling-eg6fm3?from-embed">
									Framer-Motion&apos;s useScroll functionality
								</Link>{" "}
								, their example carousel formed the basis of my Portfolio
								section and inspired refactoring the SVG Circle into a series of
								Ellipses.
							</p>
						</li>
						<li className={styles.credit}>
							<h3 className={styles.credit_title}>Sidebar</h3>
							<p className={styles.credit_description}>
								Once again inspired by the possibilities of Framer-Motion, I
								took their{" "}
								<Link
									href="https://codesandbox.io/s/framer-motion-side-menu-mx2rw?from-embed"
									className={styles.link}>
									Side Menu codepen
								</Link>{" "}
								as the basis for my Sidebars, and adjusted the variants to fit
								my needs.
							</p>
						</li>
						<li className={styles.credit}>
							<h3 className={styles.credit_title}>Cards</h3>
							<p className={styles.credit_description}>
								Apple know what they&apos;re doing. So I decided why not take
								inspiration and inspect the Cards I particularly like on their{" "}
								<Link
									href="https://www.apple.com/uk/store"
									className={styles.link}>
									UK Store.
								</Link>
							</p>
						</li>
						<li className={styles.credit}>
							<h3 className={styles.credit_title}>Animations</h3>
							<p className={styles.credit_description}>
								A credits section wouldn&apos;t be complete without a nod to{" "}
								<Link
									className={styles.link}
									href="https://www.youtube.com/watch?v=SuqU904ZHA4">
									Fireship.
								</Link>
							</p>
						</li>
						<li className={styles.credit}>
							<h3 className={styles.credit_title}>Sexy Curves</h3>
							<p className={styles.credit_description}>
								Another{" "}
								<Link
									href="https://www.youtube.com/watch?v=lPJVi797Uy0"
									className={styles.link}>
									Fireship
								</Link>{" "}
								plug, this time helping influence how to make the borders
								between homepage sections more interesting
							</p>
						</li>

						<li className={styles.credit}>
							<h3 className={styles.credit_title}>Dark Mode</h3>
							<p className={styles.credit_description}>
								Like every good developer, I wanted everything to be dark. So I
								made a dark mode. I then realised I had no idea how to make
								things in dark mode... Cue{" "}
								<Link
									className={styles.link}
									href="https://m2.material.io/design/color/dark-theme.html#properties">
									the geniuses behind Material UI
								</Link>{" "}
								for this comprehensive guide.
							</p>
						</li>
						<li className={styles.credit}>
							<h3 className={styles.credit_title}>Menu Hover Effect</h3>
							<p className={styles.credit_description}>
								The title told me I needed it so I did. I&apos;m very glad I
								could include this beautiful effect and{" "}
								<Link
									href="https://www.youtube.com/watch?v=htGfnF1zN4g"
									className={styles.link}>
									Hyperplexed
								</Link>{" "}
								provided such a great breakdown on it.
							</p>
						</li>
						<li className={styles.credit}>
							<h3 className={styles.credit_title}>Hover Animation on Titles</h3>
							<p className={styles.credit_description}>
								When designing my site I spent a while looking at others and
								searching for inspiration. When I came across{" "}
								<Link href="https://jacekjeznach.com/" className={styles.link}>
									this site.
								</Link>{" "}
								one of the first things I did was reverse engineer the effect.
							</p>
						</li>
					</ul>
				</div>
			</BlobBackground>
		</Layout>
	);
};

export default credits;
