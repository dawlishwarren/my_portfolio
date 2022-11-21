// React/Next/NPM
import React, { useState } from "react";
import { motion } from "framer-motion";
// Components
import MenuItem from "../menuItem/MenuItem";
import ThemeChanger from "../themeChanger/ThemeChanger";

// Styles/Assets
import styles from "./sidebar.module.scss";
import hoverStyles from "../../styles/hover.module.scss";
import { VscColorMode } from "react-icons/vsc";
import { AiOutlineToTop } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { SiAboutdotme } from "react-icons/si";
import { MdViewCarousel } from "react-icons/md";
import { RiContactsLine } from "react-icons/ri";
import { BsCodeSlash } from "react-icons/bs";
const links = [
	{ index: 0, name: "Top", href: "main", icon: <AiOutlineToTop size={18} /> },
	{
		index: 1,
		name: "About Me",
		href: "about",
		icon: <SiAboutdotme size={18} />,
	},
	{ index: 2, name: "Skills", href: "skills", icon: <GiSkills size={18} /> },
	{
		index: 3,
		name: "Portfolio",
		href: "portfolio",
		icon: <MdViewCarousel size={18} />,
	},
	{
		index: 4,
		name: "Contact Me",
		href: "contact",
		icon: <RiContactsLine size={18} />,
	},
	{ index: 5, name: "Blog", href: "blog", icon: <BsCodeSlash size={18} /> },
];

// Prop Types
interface Props {
	toggle: VoidFunction;
}

const Sidebar = ({ toggle }: Props) => {
	const [isMouse, toggleMouse] = useState(false);
	const toggleMouseMenu = () => {
		toggleMouse(!isMouse);
	};
	const handleMouseMove = (e: React.MouseEvent<HTMLUListElement>) => {
		e.preventDefault();

		for (const item of document.getElementsByClassName(
			`${hoverStyles.menu_item}`
		) as HTMLCollectionOf<HTMLLIElement>) {
			const rect = item.getBoundingClientRect(),
				x = e.clientX - rect.left,
				y = e.clientY - rect.top;
			item.style.setProperty("--mouse-x", `${x}px`);
			item.style.setProperty("--mouse-y", `${y}px`);
		}
	};
	// Framer Motion variants
	const backgroundVariants = {
		open: (height = 1000) => ({
			clipPath: `circle(${height * 2 + 200}px at 10vw 10vh)`,
			transition: {
				type: "spring",
				stiffness: 20,
				restDelta: 2,
			},
		}),
		closed: {
			clipPath: "circle(30px at 10vw 10vh)",
			transition: {
				delay: 0.5,
				type: "spring",
				stiffness: 400,
				damping: 40,
			},
		},
	};
	const linksVariants = {
		open: {
			transition: { staggerChildren: 0.07, delayChildren: 0.2 },
			opacity: 1,
		},
		closed: {
			transition: { staggerChildren: 0.07, staggerDirection: -1 },
			opacity: 0,
		},
	};

	return (
		<>
			{/* Background */}
			<motion.div className={styles.background} variants={backgroundVariants} />
			{/* Content */}
			<motion.ul
				className={`${styles.sidebar_ul} ${hoverStyles.sidebar_ul}`}
				variants={linksVariants}
				onMouseMove={handleMouseMove}>
				{/* Navigation */}
				<motion.ul className={styles.nav_ul} onClick={toggle}>
					{links.map((link) => (
						<MenuItem
							i={link.index}
							key={link.index}
							name={link.name}
							href={link.href}
							icon={link.icon}
						/>
					))}
				</motion.ul>
				{/* Theme Changer */}
				<motion.ul
					className={styles.theme_ul}
					variants={linksVariants}
					onMouseEnter={toggleMouseMenu}
					onMouseLeave={toggleMouseMenu}>
					<MenuItem
						i={links.length}
						name={"Light/Dark Mode Toggle"}
						className={styles.theme_icon}
						icon={
							<VscColorMode
								size={40}
								transform={isMouse ? "rotate(0)" : "rotate(45)"}
							/>
						}
						href="/"
					/>
					{isMouse && <ThemeChanger isMouse />}
				</motion.ul>
			</motion.ul>
		</>
	);
};
export default Sidebar;
