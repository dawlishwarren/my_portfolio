import {
	TiSocialFacebook,
	TiSocialGithub,
	TiSocialInstagram,
	TiSocialLinkedin,
	TiSocialTwitter,
} from "react-icons/ti";
import { IconContext } from "react-icons";
import styles from "./socials.module.scss";
import ColorBurn from "../colorBurn/ColorBurn";

interface Props {
	colorBurn: boolean;
}

const Socials = ({ colorBurn }: Props) => {
	return (
		<IconContext.Provider
			value={{
				className: `${styles.icon}`,
			}}>
			{colorBurn ? (
				<ColorBurn>
					<TiSocialFacebook />
					<TiSocialGithub />
					<TiSocialInstagram />
					<TiSocialTwitter />
					<TiSocialLinkedin />
				</ColorBurn>
			) : (
				<>
					<TiSocialFacebook />
					<TiSocialGithub />
					<TiSocialInstagram />
					<TiSocialTwitter />
					<TiSocialLinkedin />
				</>
			)}
		</IconContext.Provider>
	);
};

export default Socials;
