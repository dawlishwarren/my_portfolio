// Components
import AnimatedTitle from '../animatedTitle/AnimatedTitle';
import SkillCategory from '../skillCategory/SkillCategory';
// Styles
import styles from './skills.module.scss';
// Data
import {
	languageSkills,
	designSkills,
	databaseSkills,
	testingPlanningSkills,
	frameworkSkills,
} from '../../data/skills';
import { IconType } from 'react-icons/lib';
import { useState } from 'react';
interface Skill {
	name: string;
	icon: IconType;
}

const Skills = () => {
	const [activeCategory, setActiveCategory] = useState('');

	function toggleActive(category: string) {
		setActiveCategory(category);
	}

	return (
		<section id='skills' className={`scroll-area ${[styles.skills_section]}`}>
			{/* Section Header */}
			<header className={styles.header}>
				<AnimatedTitle str='My Skills' size='clamp(2rem, 6vw + 1rem, 5rem)' />
			</header>

			<h4>Categories</h4>
			<div className={styles.categories_container}>
				{/* Language */}
				<button
					onClick={() => toggleActive('language')}
					className={styles.category_header}>
					Language
				</button>
				{/* Design */}
				<button
					onClick={() => toggleActive('design')}
					className={styles.category_header}>
					Design
				</button>
				{/* Database */}
				<button
					onClick={() => toggleActive('database')}
					className={styles.category_header}>
					Backend Development
				</button>
				{/* Testing */}
				<button
					onClick={() => toggleActive('testing')}
					className={styles.category_header}>
					Testing and Planning
				</button>
				{/* Other */}
				<button
					onClick={() => toggleActive('frameworks')}
					className={styles.category_header}>
					Frameworks
				</button>
			</div>
			<>
				{(() => {
					switch (activeCategory) {
						case 'language':
							return <SkillCategory skills={languageSkills} />;
						case 'design':
							return <SkillCategory skills={designSkills} />;
						case 'database':
							return <SkillCategory skills={databaseSkills} />;
						case 'testing':
							return <SkillCategory skills={testingPlanningSkills} />;
						case 'frameworks':
							return <SkillCategory skills={frameworkSkills} />;
						default:
							return <p>Select a category:</p>;
					}
				})()}
			</>
		</section>
	);
};

export default Skills;
