import React from 'react';
import styles from './themeChanger.module.scss';

const ThemeChanger = () => {
	return (
		<ul className={styles.theme}>
			<li>Light</li>
			<li>Dark</li>
			<li>System</li>
		</ul>
	);
};

export default ThemeChanger;
