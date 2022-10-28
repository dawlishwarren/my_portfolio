// React/Next/NPM
import { motion, Variants } from 'framer-motion';

// Styles/Assets
import styles from './timeline.module.scss';
import { GiSaxophone } from 'react-icons/gi';
import { BsBook, BsExclamationLg } from 'react-icons/bs';
import { ImGlass2 } from 'react-icons/im';
import { BiPaint } from 'react-icons/bi';

const content = [
	{
		title: 'Self Taught',
		icon: <BsBook />,
		text: `Alumni of the illustrious Class of Covid '20, my learning
started at recommendations of Udemy courses, and hasn't slowed
down since. With the help of some esteemed mentors to help point
me in the right directions, I now thoroughly enjoy the process
of deep-diving documentation and learning how things work from
the source. I relish the challenge of immersing myself in any
language, framework or library that the task demands.`,
		firstLine: '',
		rest: '',
	},
	{
		title: 'Creative',
		icon: <GiSaxophone />,
		text: `A professional saxophonist, I come to development with a strong
foundation in the creative arts. It's with that artistic passion
that I'm drawn to the infinite possibilities of front-end. With
a background in jazz I'm no stranger to improvisation, creative
problem solving, and working in close-knit teams.`,
		firstLine: '',
		rest: '',
	},
	{
		title: 'Entertainer',
		icon: <ImGlass2 />,
		text: `With a hustle in the hospitality industry for a number of years
I am no stranger to keeping people happy and entertained. With a
history of bartending I pride myself on my beautiful cocktails,
social skills, and organisation. Currently working as a manager
I'm very used to the needs of keeping a team happy, and also
communicating with people dissatisfied with their experience to
come to a solution.`,
		firstLine: '',
		rest: '',
	},
	{
		title: 'Advocate',
		icon: <BsExclamationLg />,
		text: `I believe that a company should honestly align themselves with
	values important to them. I look forward greatly to working in
	teams and companies that are dedicated to positive change. I
	have personally and professionally championed issues relating to
	environmental sustainability, LGBT+ representation and men's
	mental health.`,
		firstLine: '',
		rest: '',
	},
	{
		title: 'Front-end Developer',
		icon: <BiPaint />,
		text: `Although competent and au fait with backend development and
	server-side scripts, I am far more inspired by and passionate
	about front-end design`,
		firstLine: '',
		rest: '',
	},
];
content.forEach(
	(topic) => (
		(topic.firstLine = topic.text.split('.')[0]),
		(topic.rest = topic.text.split('.')[1])
	)
);

const timelineVariants: Variants = {
	offscreenRight: {
		x: -400,
		y: 100,
	},
	offscreenLeft: (width = 0) => ({
		x: width > 600 || 0 ? -400 : 400,
		y: 100,
	}),
	onscreen: {
		x: 0,
		y: 0,
		transition: {
			type: 'spring',
			bounce: 0.4,
			duration: 2,
		},
	},
};

const colors = ['#A80049', '#0b00a8', '#9C1AFF', '#7700FF', '#4400FF'];

const Timeline = () => {
	return (
		<div className={styles.timeline}>
			{content.map((topic, index) => (
				<motion.li
					key={index}
					initial={index % 2 == 0 ? 'offscreenLeft' : 'offscreenRight'}
					viewport={{ once: true }}
					whileInView='onscreen'>
					<motion.div
						className={styles.content_container}
						variants={timelineVariants}
						style={{ color: colors[index] }}>
						<div
							className={styles.banner}
							style={{ backgroundColor: colors[index] }}
						/>
						<h3 className={styles.title}>{topic.title}</h3>
						<p className={styles.first_line}>{topic.firstLine}.</p>
						{topic.rest && <p className={styles.rest}>{topic.rest}.</p>}
						<p className={styles.icon}>{topic.icon}</p>
					</motion.div>
				</motion.li>
			))}
		</div>
	);
};

export default Timeline;
