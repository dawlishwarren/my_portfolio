// React/Next/NPM
import React from 'react';
// Components
import AnimatedTitle from '../animatedTitle/AnimatedTitle';
import { CgAttachment } from 'react-icons/cg';
import { GoMail } from 'react-icons/go';
import { SlSocialLinkedin } from 'react-icons/sl';
// Styles/Assets
import styles from './contact.module.scss';

const Contact = () => {
	return (
		<section id='contact' className={`scroll-area ${[styles.contact_section]}`}>
			<div className={styles.container}>
				<div className={styles.box}>
					<div className={styles.header_wrapper}>
						<AnimatedTitle str='Get in touch' />
					</div>
					<div className={styles.content}>
						<div className={styles.columns}>
							<div className={styles.column}>
								<CgAttachment size={32} />
								<h1 className={styles.title}>Read my Résumé</h1>
							</div>
							<div className={styles.column}>
								<GoMail size={32} />
								<h1 className={styles.title}>Send me an Email</h1>
							</div>
							<div className={styles.column}>
								<SlSocialLinkedin size={32} />
								<h1 className={styles.title}>Find me on LinkedIn</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
