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
		<>
			{/* Gradient Definition */}
			<svg width='0' height='0'>
				<linearGradient id='green-gradient' x1='100%' y1='100%' x2='0%' y2='0%'>
					<stop stopColor='#162521' offset='0%' />
					<stop stopColor='#003d2d' offset='25%' />
					<stop stopColor='#243e36' offset='50%' />
					<stop stopColor='#00a85f' offset='75%' />
					<stop stopColor='#e0eec6' offset='100%' />
				</linearGradient>
			</svg>
			<IconContext.Provider
				value={{
					className: `${styles.icon}`,
					// style: { fill: 'url(#green-gradient)' },
				}}>
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
		</>
	);
};

export default Socials;
