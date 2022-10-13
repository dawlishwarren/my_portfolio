import styles from "./mainHero.module.scss";

const MainHero = () => {
	return (
		<>
			<svg width="0" height="0">
				<defs>
					<clipPath id="myCurve" clipPathUnits="objectBoundingBox">
						<path
							d="M 0,1
                            L 0,0
                            L 1,0
                            L 1,0.3
                            C 0.8 .3, .2 .75, 0 .7
                            Z"
						/>
					</clipPath>
				</defs>
			</svg>
			<header className={styles.hero}>
				<div className={styles.gradient_wrapper}>
					<div className={styles.gradient} />
				</div>
				<div className={styles.title_container}>
					<h1 className={styles.hero_title}>Hello, my name is Alex Warren.</h1>
					<div className={styles.hero_title_burn} aria-hidden>
						Hello, my name is Alex Warren.
					</div>
					<div className={styles.hero_title} data-overlay aria-hidden="true">
						Hello, my name is Alex Warren.
					</div>
				</div>
			</header>
		</>
	);
};

export default MainHero;
