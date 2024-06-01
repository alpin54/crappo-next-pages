// -- style
import style from "./style.module.scss";

// -- atom
import SystemIcon from "@atoms/SystemIcon";

const NumbersItem = (props) => {
	return (
		<div className={style.item}>
			<div className={style.icon}>
				<SystemIcon name={props.data.icon_font} />
			</div>
			<div className={style.text}>
				<h4 className={style.title}>{props.data.title}</h4>
				<p className={style.desc}>{props.data.description}</p>
			</div>
		</div>
	);
};

export default NumbersItem;
