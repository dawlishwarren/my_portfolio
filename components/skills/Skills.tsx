import React from 'react';
import styles from './skills.module.scss';
import {
	languageSkills,
	databaseSkills,
	designSkills,
	testingPlanningSkills,
	frameworkSkills,
} from '../../data/skills';
import { plan, test } from '../../data/skills';
import SkillCategory from './skillCategory/SkillCategory';

const Skills = () => {
	return (
		<section id='skills' className={`scroll-area ${[styles.skills_section]}`}>
			<div className={styles.container}>
				<div className={styles.box}>
					<div className={styles.content}>
						<div className={styles.columns}>
							<div className={styles.column}>
								<h1 className={styles.title}>Planner</h1>
								<p>
									A career accidentally built on red, green, refactor. I now
									know the importance of planning.
								</p>
								<p className={styles.primary}>How I work:</p>
								<SkillCategory skills={plan} />
								<p className={styles.primary}>How I test:</p>
								<SkillCategory skills={test} />
							</div>
							<div className={styles.column}>
								<h1 className={styles.title}>Designer</h1>
								<p>I work with the goal of design so nice it goes unnoticed.</p>
								<p className={styles.primary}>Tools I use:</p>
							</div>
							<div className={styles.column}>
								<h1 className={styles.title}>Builder</h1>
								<p>
									Beguiled by the magic of code, I love building things from
									scratch.
								</p>
								<p className={styles.primary}>Languages I love:</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
