import { BsJournalBookmarkFill } from 'react-icons/bs';
import {
	DiGithubFull,
	DiCss3,
	DiHtml5,
	DiJavascript1,
	DiMongodb,
	DiMysql,
	DiNodejs,
	DiPhp,
	DiReact,
	DiSass,
	DiWordpress,
} from 'react-icons/di';
import {
	SiAmazonaws,
	SiCanva,
	SiCypress,
	SiFigma,
	SiGraphql,
	SiJest,
	SiNextdotjs,
	SiNotion,
	SiPostman,
	SiRedux,
	SiSvg,
	SiTypescript,
} from 'react-icons/si';

export const plan = [
	{
		name: 'Figma',
		icon: SiFigma,
		when: 2022,
		where: 'Tutorials',
		text: 'Used more recently in the planning and wire-framing stage of any project or idea.',
	},
	{
		name: 'Notion',
		icon: SiNotion,
		when: 2022,
		where: 'Tutorial',
		text: 'My go-to productivity and planning tool for project-management and day-to-day life.',
	},
	{
		name: 'Planner',
		icon: BsJournalBookmarkFill,
		when: 2020,
		text: `I've greatly benefited from using planners and reflecting on a regular basis. https://passionplanner.com/`,
	},
	{
		name: 'GitHub',
		icon: DiGithubFull,
		when: 2021,
		where: 'Tutorials and googling it.',
		text: `While all of my projects and sites have been solo and self-taught endeavours, the importance of version control has not been lost on me.`,
	},
];

export const test = [
	{
		name: 'Jest',
		icon: SiJest,
		when: 2022,
		where: 'Documentation',
		text: 'Red, green, refactor. Along with end-to-end testing I have endeavoured to improve my productivity and programming by writing unit tests as I build.',
	},
	{
		name: 'Postman',
		icon: SiPostman,
		when: 2021,
		where: 'Udemy, tutorial',
		text: 'Learned in conjuction with Express and MongoDB when building MERN stack apps.',
	},
	{
		name: 'TypeScript',
		icon: SiTypescript,
		when: 2022,
		where: 'Documentation, Stack Overflow',
		text: `Learnt directly from the TypeScript docs in an effort to increase productivity and write more robust code. Now I know why all my old projects don't work!`,
	},
	{
		name: 'Cypress',
		icon: SiCypress,
		when: 2022,
		where: 'Documentation, YouTube',
		text: 'My first experience with end-to-end testing.',
	},
];
export const frontEndDesign = [
	{
		name: 'CSS',
		icon: DiCss3,
		when: 2020,
		where: 'Udemy, YouTube, Documentation',
		text: 'The biggest source of inspiration and headache. Catch me in the DevTools "borrowing" CSS.',
	},
	{
		name: 'Canva',
		icon: SiCanva,
		when: 2021,
		where: 'Canva Website and Tutorials',
		text: 'Used to sketch icons and logos and help design layouts.',
	},
	{
		name: 'SVG',
		icon: SiSvg,
		when: 2022,
		where: 'Documentation, YouTube',
		text: `I have aware of and using SVGs since 2020, but it's 2022 that I began trawling the documentation to learn how to integrate and manipulate them.`,
	},
	{
		name: 'Sass',
		icon: DiSass,
		when: 2020,
		where: 'Udemy, Documentation',
		text: 'My most preferred CSS extension language, and what is being used to style this portfolio.',
	},
];

export const backEndDesign = [
	{
		name: 'WordPress',
		icon: DiWordpress,
		when: 2021,
		where: 'YouTube, tutorials, stack overflow',
		text: 'Used more as a CMS for headless apps rather than directly through the WordPress template system.',
	},
	{
		name: 'AWS',
		icon: SiAmazonaws,
		when: 2022,
		where: 'Documentation',
		text: 'Experienced specfically with AWS S3 buckets, but an area I want to know more about.',
	},

	{
		name: 'MongoDB',
		icon: DiMongodb,
		when: 2021,
		where: 'Tutorials',
		text: 'Used extensively with MERN-stack projects, and as an endpoint for a Next.js business directory app.',
	},
	{
		name: 'GraphQL',
		icon: SiGraphql,
		when: 2021,
		where: 'Documentation, YouTube',
		text: 'First used on a NextJS Headless Wordpress starter for a project in 2021.',
	},
];

export const languages = [
	{
		name: 'HTML',
		icon: DiHtml5,
		when: 2020,
		where: 'Udemy, YouTube, w3schools, MDN',
		text: 'My first introduction to web development and coding in general. Class of Covid.',
	},
	{
		name: 'JavaScript',
		icon: DiJavascript1,
		when: 2020,
		where: 'Udemy, YouTube, w3schools, MDN',
		text: 'From building to-do apps to full-stack MERN projects, JavaScript has been the backbone of my development experience.',
	},

	{
		name: 'PHP',
		icon: DiPhp,
		when: 2022,
		where: 'PHP & MySQL for Dynamic Web Sites (Larry Ullman).',
		text: 'Learnt to gain a better understanding of server-side scripts and environments.',
	},
	{
		name: 'MySQL',
		icon: DiMysql,
		when: 2022,
		where: 'PHP & MySQL for Dynamic Web Sites (Larry Ullman).',
		text: 'Learnt wanting to become a more well-rounded developer, as an introduction to SQL database structuring.',
	},
];
export const frameworks = [
	{
		name: 'NodeJS',
		icon: DiNodejs,
		when: 2021,
		where: 'Udemy, documentation.',
		text: 'Node.js and NPM have been my go-to runtime and package manager ever since getting into development.',
	},

	{
		name: 'Redux',
		icon: SiRedux,
		when: 2021,
		where: 'Udemy, tutorials, stack overflow',
		text: 'Used in React apps with requirements of a large state-management framework.',
	},
	{
		name: 'NextJS',
		icon: SiNextdotjs,
		when: 2022,
		where: 'Documentation, stack overflow',
		text: 'My current preferred React.js framework. This site has been built using Next.js, chosen for its SEO optimisations, intuitive styling and routing.',
	},
	{
		name: 'React',
		icon: DiReact,
		when: 2021,
		where: 'Udemy, documentation',
		text: 'My first and preferred JavaScript framework.',
	},
];
