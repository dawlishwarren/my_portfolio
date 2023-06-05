import { NextPage } from 'next';
import styles from '../styles/test.module.scss';
import React, { useState } from 'react';

const TestingPage: NextPage = () => {
	// Mouse move event on page wrapper
	// Finds every child element
	// Gets the local coordinates (offsetX + element width / 2, offsetY + element height / 2)
	// For each element

	function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
		// Get coordinates of Centre of Window
		const rect = e.currentTarget.getBoundingClientRect();
		const x = (rect.left + rect.right) / 2;
		const y = (rect.top + rect.bottom) / 2;

		console.log(Math.atan2(y - e.clientY, x - e.clientX));
		// Get angle between centre of window and mouse coordinates
		const radians = Math.atan2(y - e.clientY, x - e.clientX);
		e.currentTarget.style.setProperty('--rotation', `${radians}rad`);

		const forms = document.getElementsByClassName(`${styles.form}`);
		// console.log(forms.item(0)?.getClientRects());
	}

	// Get window x and y of mouse
	// Compare with the x and y of the element
	// Put difference into atan2 function
	// Set rotation style of element

	return (
		<div className={styles.layout}>
			<div
				className={styles.gradient_rotation_wrapper}
				onMouseMove={handleMouseMove}>
				<div className={styles.form_container}>
					<form className={styles.form}>
						<h2>Contact</h2>
						<label htmlFor='Name' />
						<input name='Name' placeholder='Name' type='text' />
						<label htmlFor='Email' />
						<input name='Email' placeholder='Email' type='text' />
						<label htmlFor='Number' />
						<input name='Number' placeholder='Number' type='text' />
						<button type='submit' disabled>
							Submit
						</button>
					</form>
					<form className={styles.form}>
						<h2>Contact</h2>
						<label htmlFor='Name' />
						<input name='Name' placeholder='Name' type='text' />
						<label htmlFor='Email' />
						<input name='Email' placeholder='Email' type='text' />
						<label htmlFor='Number' />
						<input name='Number' placeholder='Number' type='text' />
						<button type='submit' disabled>
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default TestingPage;
