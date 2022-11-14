import React from "react";
import styles from "./skills.module.scss";

import {
	plan,
	test,
	frontEndDesign,
	backEndDesign,
	languages,
	frameworks,
} from "../../data/skills";
import SkillCategory from "../skillCategory/SkillCategory";
import ScrollDown from "../scrollDown/ScrollDown";

const Skills = () => {
	return (
		<section id="skills" className={`scroll-area ${[styles.skills_section]}`}>
			<div className={styles.container}>
				<div className={styles.box}>
					<div className={styles.content}>
						<div className={styles.columns}>
							<div className={styles.column}>
								<h1 className={`${styles.title} ${styles.plan}`}>Planner</h1>
								<p>
									A career accidentally built on red, green, refactor. I now
									understand the importance of planning.
								</p>
								<p className={`${styles.primary} ${styles.plan}`}>
									Failing to prepare:
								</p>
								<SkillCategory skills={plan} category={"plan"} />
								<p className={`${styles.primary} ${styles.plan}`}>
									Preparing to fail:
								</p>
								<SkillCategory skills={test} category={"plan"} />
							</div>
							<div className={styles.column}>
								<h1 className={`${styles.title} ${styles.design}`}>Designer</h1>
								<p>
									Whether it&apos;s front or back end, I work with the goal of
									design so nice it goes unnoticed.
								</p>
								<p className={`${styles.primary} ${styles.design}`}>
									Business in the front:
								</p>
								<SkillCategory category={"design"} skills={frontEndDesign} />
								<p className={`${styles.primary} ${styles.design}`}>
									Party in the back:
								</p>
								<SkillCategory category={"design"} skills={backEndDesign} />
							</div>
							<div className={styles.column}>
								<h1 className={`${styles.title} ${styles.build}`}>Builder</h1>
								<p>
									Beguiled by the magic of code, I love building things from
									scratch.
								</p>
								<p className={`${styles.primary} ${styles.build}`}>I speak:</p>
								<SkillCategory category={"build"} skills={languages} />
								<p className={`${styles.primary} ${styles.build}`}>
									Library voices please:
								</p>
								<SkillCategory category={"build"} skills={frameworks} />
							</div>
						</div>
					</div>
				</div>
			</div>
			<ScrollDown />
		</section>
	);
};

export default Skills;
