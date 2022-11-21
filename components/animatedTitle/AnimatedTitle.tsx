// Components
import ElementAnimation from "./ElementAnimation";
// Styles/Assets
import styles from "./animatedTitle.module.scss";

// Prop types
type Props = {
	str: string;
	size?: string;
	id?: string;
};

// Component
const AnimatedTitle = (props: Props) => {
	// Destructuring props
	const { str, id, size } = props;
	// Splits string to an array, e.g 'Hello' => 'H, e, l, l, o'
	const arrayStr = str.split("");

	return (
		<div className={styles.title_container}>
			<h1
				id={id}
				className={styles.title}
				style={{ fontSize: size ? size : "min(10vw, 5rem)" }}>
				{/* Map every string in the array into the hover state management component */}
				{arrayStr.map((s, i) => (
					<ElementAnimation timing={1000} string={s} key={i} />
				))}
			</h1>
		</div>
	);
};

export default AnimatedTitle;
