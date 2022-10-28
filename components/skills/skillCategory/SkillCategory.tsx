// Components
import SkillModal from "../skillModal/skillModal";
import { motion, AnimatePresence } from "framer-motion";
import { DiHtml5 } from "react-icons/di";
// React and TS imports
import { useState } from "react";
import { IconType } from "react-icons";
// Styles
import styles from "./skillCategory.module.scss";

interface Props {
	skills: any;
}
interface Skill {
	name: string;
	icon: IconType;
	text?: string;
	when: number;
	where: string;
}

const SkillCategory = ({ skills }: Props) => {
	// Modal State
	const [modalOpen, setModalOpen] = useState(false);
	const [activeSkill, setActiveSkill] = useState<Skill>({
		name: "HTML",
		icon: DiHtml5,
		text: "",
		when: 0,
		where: "",
	});
	const close = () => setModalOpen(false);
	return (
		<>
			<div className={styles.icons_container}>
				{/* Sort the skills prop alphabetically, and then map it to a series of icons */}
				{skills
					.sort((a: Skill, b: Skill) => a.name.localeCompare(b.name))
					.map((skill: Skill, index: number) => (
						<motion.button
							className={styles.skill}
							key={index}
							onClick={() => {
								modalOpen ? setModalOpen(false) : setModalOpen(true);
								setActiveSkill(skill);
							}}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}>
							<skill.icon className={styles.icon} />
							<motion.p className={styles.name}>{skill.name}</motion.p>
						</motion.button>
					))}
				<AnimatePresence initial={false} mode="wait">
					{modalOpen && (
						<SkillModal
							modalOpen={modalOpen}
							handleClose={close}
							name={activeSkill.name}
							Icon={activeSkill.icon}
							text={activeSkill.text}
							when={activeSkill.when}
							where={activeSkill.where}
						/>
					)}
				</AnimatePresence>
			</div>
		</>
	);
};

export default SkillCategory;
