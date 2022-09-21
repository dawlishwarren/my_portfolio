import styles from "./main.module.scss";

const Main = () => {
	return (
		<main className={styles.main}>
			<div className={styles.grid}>
				<div className={styles.title_wrapper}>
					<h1 className={styles.title}>Alex Warren // Developer</h1>
				</div>
				<div className={styles.box_1}></div>
				<div className={styles.box_2}></div>
				<div className={styles.box_3}></div>
				<div className={styles.box_4}></div>
			</div>
		</main>
	);
};

export default Main;
