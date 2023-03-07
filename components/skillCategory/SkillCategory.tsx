// Components
import Modal from '../modal/Modal';
import { m, AnimatePresence } from 'framer-motion';
import { DiHtml5 } from 'react-icons/di';
import { Libre_Baskerville } from 'next/font/google';
// React and TS imports
import { useState } from 'react';
import { IconType } from 'react-icons';
// Styles
import styles from './skillCategory.module.scss';
// Prop Types
interface Props {
	skills: any;
	category: string;
}
interface Skill {
	name: string;
	icon: IconType;
	text?: string;
	when?: number;
	where?: string;
}

const baskerville = Libre_Baskerville({
	weight: '700',
	subsets: ['latin'],
});

const SkillCategory = ({ skills, category }: Props) => {
	// Modal State
	const [modalOpen, setModalOpen] = useState(false);
	const [activeSkill, setActiveSkill] = useState<Skill>({
		name: 'HTML',
		icon: DiHtml5,
		text: '',
		when: 0,
		where: '',
	});
	const { name, text, when, where } = activeSkill;
	const close = () => setModalOpen(false);

	const getCategoryColor = (category: string) => {
		switch (category) {
			case 'plan':
				return styles.plan;
			case 'design':
				return styles.design;
			case 'build':
				return styles.build;
			default:
				break;
		}
	};
	return (
		<div className={styles.icons_container}>
			<ul className={styles.skills_list}>
				{/* Sort the skills prop alphabetically, and then map it to a series of icons */}
				{skills
					.sort((a: Skill, b: Skill) => a.name.localeCompare(b.name))
					.map((skill: Skill, index: number) => (
						<m.li
							className={`${getCategoryColor(category)} ${styles.skill}`}
							key={index}
							onClick={() => {
								modalOpen ? setModalOpen(false) : setModalOpen(true);
								setActiveSkill(skill);
							}}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}>
							<div className={styles.icon_wrapper}>
								<skill.icon className={styles.icon} />
							</div>
							{/* <m.p className={styles.name}>{skill.name}</m.p> */}
						</m.li>
					))}
			</ul>
			{/* Modal */}
			<AnimatePresence initial={false} mode='wait'>
				{modalOpen && (
					<Modal modalOpen={modalOpen} handleClose={close}>
						<div className={styles.modal_wrapper}>
							<div className={`${styles.header} ${baskerville.className}`}>
								<div className={styles.icon_wrapper}>
									<activeSkill.icon className={styles.icon} />
								</div>
								<h2 className={styles.title}>{name}</h2>
							</div>
							<div className={styles.text_container}>
								{when && (
									<p className={styles.when}>
										<span className={styles.subtitle}>Since:</span> {when}
									</p>
								)}
								{where && (
									<p className={styles.where}>
										<span className={styles.subtitle}>Learnt via:</span> {where}
									</p>
								)}
								{text && <p className={styles.paragraph}>{text}</p>}
							</div>
						</div>
					</Modal>
				)}
			</AnimatePresence>
		</div>
	);
};

export default SkillCategory;
