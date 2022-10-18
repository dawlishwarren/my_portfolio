import React from 'react';
import AnimatedTitle from '../animatedTitle/AnimatedTitle';
import styles from './skills.module.scss';
import {
	DiAws,
	DiGithubFull,
	DiCss3,
	DiHtml5,
	DiJavascript1,
	DiMongodb,
	DiMysql,
	DiNodejs,
	DiPhp,
	DiReact,
	DiSass,
	DiWordpress,
} from 'react-icons/di';
import {
	SiCanva,
	SiFigma,
	SiGraphql,
	SiJest,
	SiJss,
	SiMamp,
	SiNextdotjs,
	SiNotion,
	SiPostman,
	SiRedux,
	SiSvg,
	SiTypescript,
} from 'react-icons/si';
import { IconType } from 'react-icons/lib';

interface Skill {
	name: string;
	icon: IconType;
	color?: string;
}

const Skills = () => {
	const skills = [
		{ name: 'AWS', icon: DiAws },
		{ name: 'GitHub', icon: DiGithubFull },
		{ name: 'JavaScript', icon: DiJavascript1 },
		{ name: 'CSS', icon: DiCss3, color: 'red' },
		{ name: 'HTML', icon: DiHtml5 },
		{ name: 'MongoDB', icon: DiMongodb },
		{ name: 'MySQL', icon: DiMysql },
		{ name: 'NodeJS', icon: DiNodejs },
		{ name: 'PHP', icon: DiPhp },
		{ name: 'React', icon: DiReact },
		{ name: 'Sass', icon: DiSass },
		{ name: 'WordPress', icon: DiWordpress },
		{ name: 'Canva', icon: SiCanva },
		{ name: 'Figma', icon: SiFigma },
		{ name: 'GraphQL', icon: SiGraphql },
		{ name: 'Jest', icon: SiJest },
		{ name: 'JSS', icon: SiJss },
		{ name: 'MAMP', icon: SiMamp },
		{ name: 'NextJS', icon: SiNextdotjs },
		{ name: 'Notion', icon: SiNotion },
		{ name: 'Postman', icon: SiPostman },
		{ name: 'Redux', icon: SiRedux },
		{ name: 'SVG', icon: SiSvg },
		{ name: 'TypeScript', icon: SiTypescript },
	];

	return (
		<section id='skills' className={`scroll-area ${[styles.skills_section]}`}>
			<header className={styles.header}>
				<AnimatedTitle str='My Skills' size='clamp(2rem, 6vw + 1rem, 5rem)' />
			</header>
			<div className={styles.icons_container}>
				{skills.map((skill: Skill) => (
					<div className={styles.skill}>
						<skill.icon
							className={styles.icon}
							style={{ color: skill.color }}
						/>
						<p className={styles.name}>{skill.name}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Skills;
