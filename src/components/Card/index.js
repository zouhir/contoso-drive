import style from './index.css';

export default function (props) {
	return (
		<div class={ style.card }>
			{ props.children }
		</div>
	);
}
