// React/Next/NPM
import React from 'react';
// Components
import AnimatedTitle from '../animatedTitle/AnimatedTitle';
import { CgAttachment } from 'react-icons/cg';
import { GoMail } from 'react-icons/go';
import { SlSocialLinkedin } from 'react-icons/sl';
// Styles/Assets
import styles from './contact.module.scss';
import hoverStyles from '../../styles/hover.module.scss';
import Link from 'next/link';

const Contact = () => {
	const handleMouseMove = (e: React.MouseEvent<HTMLUListElement>) => {
		e.preventDefault();
		for (const item of document.getElementsByClassName(
			`${hoverStyles.contact_item}`
		) as HTMLCollectionOf<HTMLLIElement>) {
			const rect = item.getBoundingClientRect(),
				x = e.clientX - rect.left,
				y = e.clientY - rect.top;
			item.style.setProperty('--mouse-x', `${x}px`);
			item.style.setProperty('--mouse-y', `${y}px`);
		}
	};
	return (
		<section id='contact' className={`scroll-area ${[styles.contact_section]}`}>
			<div className={styles.container}>
				<div className={styles.box}>
					<div className={styles.header_wrapper}>
						<AnimatedTitle str='Get in touch' />
					</div>
					<div className={styles.content}>
						<ul className={styles.columns} onMouseMove={handleMouseMove}>
							<Link href='https://docs.google.com/document/d/1Omfi4afRCgX-qENdIJm3RRpqHIJ-yTgIK0bCb7KBPy0/edit?usp=sharing'>
								<li className={`${styles.column} ${hoverStyles.contact_item}`}>
									<CgAttachment className={styles.icon} size={32} />
									<h1 className={styles.title}>Read my Résumé</h1>
								</li>
							</Link>
							<Link href='mailto:alexwarrendev@gmail.com'>
								<li className={`${styles.column} ${hoverStyles.contact_item}`}>
									<GoMail className={styles.icon} size={32} />
									<h1 className={styles.title}>Send me an Email</h1>
								</li>
							</Link>
							<li className={`${styles.column} ${hoverStyles.contact_item}`}>
								<SlSocialLinkedin className={styles.icon} size={32} />
								<h1 className={styles.title}>Find me on LinkedIn</h1>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
