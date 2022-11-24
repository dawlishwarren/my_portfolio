import { AnimatePresence, m } from 'framer-motion';
import { useRouter } from 'next/router';
const variants = {
	fadeIn: {
		y: 100,
		opacity: 0,
		transition: {
			duration: 1,
			ease: 'easeInOut',
		},
	},
	inactive: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
			ease: 'easeInOut',
		},
	},
	fadeOut: {
		opacity: 0,
		y: -100,
		transition: {
			duration: 1,
			ease: 'easeInOut',
		},
	},
};

// THE PROBLEM:
// Forces page transition on internal navigation (sidebar)
// Either need to not wrap the APP and wrap something more specific, or
// Change the way the sidebar works to navigate each section
const Transition = ({ children }: any) => {
	return (
		<div className='transitionEffect'>
			<AnimatePresence initial={false} mode='wait'>
				<m.div
					variants={variants}
					initial='fadeIn'
					animate='inactive'
					exit='fadeOut'>
					{children}
				</m.div>
			</AnimatePresence>
		</div>
	);
};

export default Transition;
