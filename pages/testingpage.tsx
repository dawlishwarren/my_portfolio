import { NextPage } from "next";
import { useEffect, useRef } from "react";
import Layout from "../components/layout/Layout";
import styles from "../styles/Home.module.scss";

const TestingPage: NextPage = () => {
	const ref = useRef<HTMLLIElement>(null);
	useEffect(() => {
		ref.current!.focus();
	}, []);
	const handleMouseMove = (e: React.MouseEvent<HTMLUListElement>) => {
		e.preventDefault();

		for (const item of document.getElementsByClassName(
			`${styles.menu_item}`
		) as HTMLCollectionOf<HTMLLIElement>) {
			const rect = item.getBoundingClientRect(),
				x = e.clientX - rect.left,
				y = e.clientY - rect.top;
			item.style.setProperty("--mouse-x", `${x}px`);
			item.style.setProperty("--mouse-y", `${y}px`);
		}
	};
	return (
		<Layout title="Alex Warren | Frontend Developer">
			<div className={styles.container}>
				<ul className={styles.sidebar} onMouseMove={handleMouseMove}>
					<li className={styles.menu_item} ref={ref}>
						<div className={styles.menu_item_border} />
						<div className={styles.menu_item_content}>Home</div>
					</li>
					<li className={styles.menu_item} ref={ref}>
						<div className={styles.menu_item_border} />
						<div className={styles.menu_item_content}>About</div>
					</li>
					<li className={styles.menu_item} ref={ref}>
						<div className={styles.menu_item_border} />
						<div className={styles.menu_item_content}>Skills</div>
					</li>
					<li className={styles.menu_item} ref={ref}>
						<div className={styles.menu_item_border} />
						<div className={styles.menu_item_content}>Portfolio</div>
					</li>
					<li className={styles.menu_item} ref={ref}>
						<div className={styles.menu_item_border} />
						<div className={styles.menu_item_content}>Blog</div>
					</li>
				</ul>
			</div>
		</Layout>
	);
};

export default TestingPage;
