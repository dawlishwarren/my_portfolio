import tourism from '../public/tourism.png';
import directory from '../public/directory.png';
import logo from '../public/logo.png';
import portfolio from '../public/portfolio.png';
import consultation from '../public/consultation.png';
import colour_guesser from '../public/colour_guesser.png';

export const portfolioData = [
	{
		index: 0,
		title: 'Vanilla HTML',
		url: tourism,
		alt: 'HTML Tourism website homepage screenshot',
	},
	{
		index: 1,
		title: 'Custom UI',
		url: directory,
		alt: 'Business directory UI',
	},
	{ index: 2, title: 'SVG Design', url: logo, alt: 'Website logo' },
	{
		index: 3,
		title: 'Testing Frontend',
		url: colour_guesser,
		alt: 'Landing page with responsive layout',
	},
	{
		index: 4,
		title: 'Consultation',
		url: consultation,
		alt: 'Screenshot of tourism website',
	},
];
