// React/Next/NPM
import Image from 'next/image';
import Link from 'next/link';
// Styles/Assets
import styles from './footer.module.scss';

// 3 Rows, Columns in 900px+
// Powered by Vercel
// Designed by Alex Warren Web Development
// Inspired by: Credits

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.content}>
					<div className={styles.lines}>
						{/* Powered by Vercel */}
						<div className={styles.line}>
							<a
								href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
								target='_blank'
								rel='noopener noreferrer'>
								Powered by -{' '}
								<span className={styles.logo}>
									<Image
										src='/vercel.svg'
										alt='Vercel Logo'
										width={72}
										height={16}
									/>
								</span>
							</a>
						</div>
						{/* Designed by Alex Warren Web Development */}
						<div className={styles.line}>
							<p>Designed by - Alex Warren Web Development</p>
						</div>
						{/* Inspired by: Credits */}
						<div className={styles.line}>
							<p>
								Inspired by -{' '}
								<Link href='/credits' className={styles.link}>
									Credits
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
