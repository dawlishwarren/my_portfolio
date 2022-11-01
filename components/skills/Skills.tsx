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
import SkillCategory from "./skillCategory/SkillCategory";

const getCategoryColor = (category: string) => {
	switch (category) {
		case "plan":
			return styles.plan;
		case "design":
			return styles.design;
		case "build":
			return styles.build;
		default:
			break;
	}
};

const Skills = () => {
	return (
		<section id="skills" className={`scroll-area ${[styles.skills_section]}`}>
			<div className={styles.container}>
				<div className={styles.box}>
					<div className={styles.content}>
						<div className={styles.columns}>
							<div className={styles.column}>
								<h1 className={`${styles.title} ${[getCategoryColor("plan")]}`}>
									Planner
								</h1>
								<p>
									A career accidentally built on red, green, refactor. I now
									know the importance of planning.
								</p>
								<p
									className={`${styles.primary} ${[getCategoryColor("plan")]}`}>
									Failing to prepare:
								</p>
								<SkillCategory skills={plan} category={"plan"} />
								<p
									className={`${styles.primary} ${[getCategoryColor("plan")]}`}>
									Preparing to fail:
								</p>
								<SkillCategory skills={test} category={"plan"} />
							</div>
							<div className={styles.column}>
								<h1
									className={`${styles.title} ${[getCategoryColor("design")]}`}>
									Designer
								</h1>
								<p>
									Whether it's front or back end, I work with the goal of design
									so nice it goes unnoticed.
								</p>
								<p
									className={`${styles.primary} ${[
										getCategoryColor("design"),
									]}`}>
									Business in the front:
								</p>
								<SkillCategory category={"design"} skills={frontEndDesign} />
								<p
									className={`${styles.primary} ${[
										getCategoryColor("design"),
									]}`}>
									Party in the back:
								</p>
								<SkillCategory category={"design"} skills={backEndDesign} />
							</div>
							<div className={styles.column}>
								<h1
									className={`${styles.title} ${[getCategoryColor("build")]}`}>
									Builder
								</h1>
								<p>
									Beguiled by the magic of code, I love building things from
									scratch.
								</p>
								<p
									className={`${styles.primary} ${[
										getCategoryColor("build"),
									]}`}>
									I speak:
								</p>
								<SkillCategory category={"build"} skills={languages} />
								<p
									className={`${styles.primary} ${[
										getCategoryColor("build"),
									]}`}>
									Library voices please:
								</p>
								<SkillCategory category={"build"} skills={frameworks} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
