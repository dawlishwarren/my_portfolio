import styles from './animatedTitle.module.scss';
import React from 'react';
import ElementAnimation from './ElementAnimation';

type Props = {
	str: string;
	id?: string;
};

const AnimatedTitle = (props: Props) => {
	const { str, id } = props;
	const arrayStr = str.split('');
	arrayStr.join(' ').split('');

	return (
		<div className={styles.title_container}>
			<h1 id={id} className={styles.title}>
				{arrayStr.map((s, i) => (
					<ElementAnimation timing={1000} children={s} key={i} />
				))}
			</h1>
		</div>
	);
};

export default AnimatedTitle;
