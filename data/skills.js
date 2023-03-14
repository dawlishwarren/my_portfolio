import { AiOutlineBook } from 'react-icons/ai';
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
		where: 'Tutorial',
		text: 'Proficient in using Figma for the planning and wire-framing stage of any project or idea.',
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
		icon: AiOutlineBook,
		when: 2020,
		text: `The single biggest aid to my productivity. The weekly overview helps me plan in great detail, and the monthly reflections keep me honest and determined. I would highly recommend: https://passionplanner.com/`,
	},
	{
		name: 'GitHub',
		icon: DiGithubFull,
		when: 2021,
		where: 'Tutorial, googling it',
		text: `All of my projects have so-far been solo projects. However, I regularly use version control through GitHub branches to ensure adding new functionality doesn't compromise my existing work.`,
	},
];

export const test = [
	{
		name: 'Jest',
		icon: SiJest,
		when: 2022,
		where: 'Documentation',
		text: `Red, green, refactor. Along with end-to-end testing I have endeavoured to improve my productivity and programming by writing unit tests as I build. My only regret is that I didn't learn it sooner.`,
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
		text: `Learnt directly from the TypeScript docs in an effort to increase productivity and write more robust code. A game-changer, I wouldn't go back. Now I know why all my old projects don't work!`,
	},
	{
		name: 'Cypress',
		icon: SiCypress,
		when: 2022,
		where: 'Documentation, YouTube',
		text: 'Wanting my testing suite knowledge included end-to-end testing, I was recommended Cypress and have been using it on projects since.',
	},
];
export const frontEndDesign = [
	{
		name: 'CSS',
		icon: DiCss3,
		when: 2020,
		where: 'Udemy, YouTube, Documentation',
		text: 'The biggest source of inspiration and headache. I am always stunned at the possibilities presented by CSS, and I thoroughly enjoy reverse-engineering the designs that inspire me.',
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
		text: 'I am comfortable using WordPress directly through the built-in control pannel, but also using WordPress as a Headless CMS project with NextJS and using GraphQL to handle user data.',
	},
	{
		name: 'AWS',
		icon: SiAmazonaws,
		when: 2022,
		where: 'Documentation',
		text: 'I have used S3 Buckets for image storage on a project. My long-term plan is to complete AWS certifications and learn about a wider array of AWS services.',
	},

	{
		name: 'MongoDB',
		icon: DiMongodb,
		when: 2021,
		where: 'Tutorials',
		text: 'Very proficient in using MongoDB to handle JSON data and manipulate it with CRUD functionalities. Used extensively with MERN-stack projects, and as an endpoint for a Next.js business directory app.',
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
		text: 'Comfortable with the basics. Learnt to gain a better understanding of server-side scripts and environments.',
	},
	{
		name: 'MySQL',
		icon: DiMysql,
		when: 2022,
		where: 'PHP & MySQL for Dynamic Web Sites (Larry Ullman).',
		text: 'Comfortable with the basics. Learnt wanting to become a more well-rounded developer, as an introduction to SQL database structuring.',
	},
];
export const frameworks = [
	{
		name: 'NodeJS',
		icon: DiNodejs,
		when: 2021,
		where: 'Udemy, documentation.',
		text: 'Proficient using Node.js and NPM, which have been my go-to runtime and package manager ever since getting into development.',
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
		text: 'The React.js framework I am most proficient in. This site has been built using Next.js, chosen for its SEO optimisations, intuitive styling and routing.',
	},
	{
		name: 'React',
		icon: DiReact,
		when: 2021,
		where: 'Udemy, documentation',
		text: 'The JS library I am most proficient in. I am very excited to fully explore the possibilities of React 13 and Server Components.',
	},
];
