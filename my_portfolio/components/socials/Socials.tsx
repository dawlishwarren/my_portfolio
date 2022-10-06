import {
	TiSocialFacebook,
	TiSocialGithub,
	TiSocialInstagram,
	TiSocialLinkedin,
	TiSocialTwitter,
} from 'react-icons/ti';
import { IconContext } from 'react-icons';
import styles from './socials.module.scss';

const Socials = () => {
	return (
		<IconContext.Provider value={{ className: `${styles.icon}` }}>
			<div className={styles.container}>
				<TiSocialFacebook />
				<TiSocialGithub />
				<TiSocialInstagram />
				<TiSocialTwitter />
			</div>
			<div className={styles.large_container}>
				<TiSocialLinkedin />
			</div>
		</IconContext.Provider>
	);
};

export default Socials;
