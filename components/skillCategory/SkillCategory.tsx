// Components
import Modal from "../modal/Modal";
import { motion, AnimatePresence } from "framer-motion";
import { DiHtml5 } from "react-icons/di";
// React and TS imports
import { useState } from "react";
import { IconType } from "react-icons";
// Styles
import styles from "./skillCategory.module.scss";
// Prop Types
interface Props {
	skills: any;
	category: string;
}
interface Skill {
	name: string;
	icon: IconType;
	text?: string;
	when: number;
	where: string;
}

const SkillCategory = ({ skills, category }: Props) => {
	// Modal State
	const [modalOpen, setModalOpen] = useState(false);
	const [activeSkill, setActiveSkill] = useState<Skill>({
		name: "HTML",
		icon: DiHtml5,
		text: "",
		when: 0,
		where: "",
	});
	const { name, text, when, where } = activeSkill;
	const close = () => setModalOpen(false);

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
	return (
		<>
			<div className={styles.icons_container}>
				<ul className={styles.skills_list}>
					{/* Sort the skills prop alphabetically, and then map it to a series of icons */}
					{skills
						.sort((a: Skill, b: Skill) => a.name.localeCompare(b.name))
						.map((skill: Skill, index: number) => (
							<motion.li
								className={`${getCategoryColor(category)} ${styles.skill}`}
								key={index}
								onClick={() => {
									modalOpen ? setModalOpen(false) : setModalOpen(true);
									setActiveSkill(skill);
								}}
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}>
								<skill.icon className={styles.icon} />
								<motion.p className={styles.name}>{skill.name}</motion.p>
							</motion.li>
						))}
				</ul>

				<AnimatePresence initial={false} mode="wait">
					{modalOpen && (
						<Modal modalOpen={modalOpen} handleClose={close}>
							<div className={styles.modal_content}>
								<div className={styles.header}>
									<h2 className={styles.title}>{name}</h2>
									<activeSkill.icon className={styles.icon} />
								</div>
								<div className={styles.text_container}>
									<p className={styles.when}>Since: {when}</p>
									<p className={styles.where}>Where: {where}</p>
									<p className={styles.paragraph}>{text}</p>
								</div>
							</div>
						</Modal>
					)}
				</AnimatePresence>
			</div>
		</>
	);
};

export default SkillCategory;
