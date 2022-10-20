import React from "react";
import styles from "./socialToggle.module.scss";
import { IoPersonAddSharp } from "react-icons/io5";

interface Props {
	toggle: any;
}

const SocialToggle = ({ toggle }: Props) => {
	return (
		<button className={styles.button} onClick={toggle}>
			<IoPersonAddSharp size={30} />
		</button>
	);
};

export default SocialToggle;
