import React from 'react';
import styles from './skills.module.scss';

import {
	plan,
	test,
	frontEndDesign,
	backEndDesign,
	languages,
	frameworks,
} from '../../data/skills';
import SkillCategory from '../skillCategory/SkillCategory';
import AnimatedTitle from '../animatedTitle/AnimatedTitle';

const Skills = () => {
	return (
		<section id='skills' className={`scroll-area ${[styles.skills_section]}`}>
			<div className={styles.header_wrapper}>
				<AnimatedTitle str='Skills' />
			</div>
			<div className={styles.container}>
				<div className={styles.blob_1}>
					<svg
						viewBox='0 0 800 500'
						preserveAspectRatio='none'
						xmlns='http://www.w3.org/2000/svg'
						xmlnsXlink='http://www.w3.org/1999/xlink'
						width='100%'
						id='blobSvg'>
						<g transform='translate(156.06833267211914, 5.6094818115234375)'>
							<defs>
								<linearGradient id='gradient' x1='0%' y1='0%' x2='0%' y2='100%'>
									<stop
										offset='0%'
										style={{ stopColor: 'rgb(241, 219, 75)' }}
									/>
									<stop
										offset='100%'
										style={{ stopColor: 'rgb(195, 66, 63)' }}
									/>
								</linearGradient>
							</defs>
							<path fill='url(#gradient)'>
								<animate
									attributeName='d'
									values='M429.5,331.5Q380,413,298,406Q216,399,151.5,363.5Q87,328,111.5,261.5Q136,195,172,130.5Q208,66,294.5,75.5Q381,85,430,167.5Q479,250,429.5,331.5Z;

                M411,314Q352,378,281.5,400.5Q211,423,172,364.5Q133,306,126,246.5Q119,187,157.5,100.5Q196,14,272.5,70Q349,126,409.5,188Q470,250,411,314Z;

                M414.5,308.5Q344,367,275,404Q206,441,160.5,378Q115,315,99.5,242.5Q84,170,142,100.5Q200,31,279.5,72Q359,113,422,181.5Q485,250,414.5,308.5Z;

                M431.5,344.5Q400,439,297.5,466Q195,493,128,417Q61,341,77.5,258Q94,175,152,125.5Q210,76,284,95Q358,114,410.5,182Q463,250,431.5,344.5Z;
            
                M429.5,331.5Q380,413,298,406Q216,399,151.5,363.5Q87,328,111.5,261.5Q136,195,172,130.5Q208,66,294.5,75.5Q381,85,430,167.5Q479,250,429.5,331.5Z'
									repeatCount='indefinite'
									dur='15s'></animate>
							</path>
						</g>
					</svg>
				</div>
				<div className={styles.blob_2}>
					<svg
						viewBox='0 0 800 500'
						preserveAspectRatio='none'
						xmlns='http://www.w3.org/2000/svg'
						xmlnsXlink='http://www.w3.org/1999/xlink'
						width='100%'
						id='blobSvg'>
						<g transform='translate(156.06833267211914, 5.6094818115234375)'>
							<defs>
								<linearGradient id='gradient' x1='0%' y1='0%' x2='0%' y2='100%'>
									<stop
										offset='0%'
										style={{ stopColor: 'rgb(241, 219, 75)' }}
									/>
									<stop
										offset='100%'
										style={{ stopColor: 'rgb(195, 66, 63)' }}
									/>
								</linearGradient>
							</defs>
							<path fill='url(#gradient)'>
								<animate
									attributeName='d'
									values='
									
									M411,314Q352,378,281.5,400.5Q211,423,172,364.5Q133,306,126,246.5Q119,187,157.5,100.5Q196,14,272.5,70Q349,126,409.5,188Q470,250,411,314Z;
									
									M414.5,308.5Q344,367,275,404Q206,441,160.5,378Q115,315,99.5,242.5Q84,170,142,100.5Q200,31,279.5,72Q359,113,422,181.5Q485,250,414.5,308.5Z;
									M429.5,331.5Q380,413,298,406Q216,399,151.5,363.5Q87,328,111.5,261.5Q136,195,172,130.5Q208,66,294.5,75.5Q381,85,430,167.5Q479,250,429.5,331.5Z;

                M431.5,344.5Q400,439,297.5,466Q195,493,128,417Q61,341,77.5,258Q94,175,152,125.5Q210,76,284,95Q358,114,410.5,182Q463,250,431.5,344.5Z;
            
                M429.5,331.5Q380,413,298,406Q216,399,151.5,363.5Q87,328,111.5,261.5Q136,195,172,130.5Q208,66,294.5,75.5Q381,85,430,167.5Q479,250,429.5,331.5Z;
				M411,314Q352,378,281.5,400.5Q211,423,172,364.5Q133,306,126,246.5Q119,187,157.5,100.5Q196,14,272.5,70Q349,126,409.5,188Q470,250,411,314Z;'
									repeatCount='indefinite'
									dur='15s'></animate>
							</path>
						</g>
					</svg>
				</div>
				<div className={styles.box}>
					<div className={styles.content}>
						<div className={styles.columns}>
							<div className={styles.column}>
								<h1 className={`${styles.title} ${styles.plan}`}>Planner</h1>
								<div className={styles.column_text}>
									<p>
										A career accidentally built on red, green, refactor. I now
										understand the importance of planning.
									</p>
								</div>
								<p className={`${styles.primary} ${styles.plan}`}>
									Failing to prepare:
								</p>
								<SkillCategory skills={plan} category={'plan'} />
								<p className={`${styles.primary} ${styles.plan}`}>
									Preparing to fail:
								</p>
								<SkillCategory skills={test} category={'plan'} />
							</div>
							<div className={styles.column}>
								<h1 className={`${styles.title} ${styles.design}`}>Designer</h1>
								<div className={styles.column_text}>
									<p>
										Whether it&apos;s front or back end, I work with the goal of
										design so nice it goes unnoticed.
									</p>
								</div>
								<p className={`${styles.primary} ${styles.design}`}>
									Business in the front:
								</p>
								<SkillCategory category={'design'} skills={frontEndDesign} />
								<p className={`${styles.primary} ${styles.design}`}>
									Party in the back:
								</p>
								<SkillCategory category={'design'} skills={backEndDesign} />
							</div>
							<div className={styles.column}>
								<h1 className={`${styles.title} ${styles.build}`}>Builder</h1>
								<div className={styles.column_text}>
									<p>
										Beguiled by the magic of code, I love building things from
										scratch.
									</p>
								</div>
								<p className={`${styles.primary} ${styles.build}`}>I speak:</p>
								<SkillCategory category={'build'} skills={languages} />
								<p className={`${styles.primary} ${styles.build}`}>
									Library voices please:
								</p>
								<SkillCategory category={'build'} skills={frameworks} />
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <ScrollDown /> */}
		</section>
	);
};

export default Skills;
