import style from './index.css';

export default function (props) {
	return (
		<header class={ style.intro }>
			{ props.children }
		</header>
	);
}
