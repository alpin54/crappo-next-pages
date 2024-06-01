import Link from "next/link";
import Image from "next/image";

// -- style
import style from "./style.module.scss";

// -- atom
import Button from "@atoms/Button";

const CryptoItem = (props) => {
	return (
		<div className={style.box}>
			<Link className={style.link} href={props.data.button.to}></Link>
			<div className={style.img}>
				<Image
					className={style.el}
					src={props.data.icon}
					alt={props.data.name}
				/>
			</div>
			<div className={style.text}>
				<h3 className={style.title}>
					{props.data.name} <span>{props.data.code}</span>
				</h3>
				<p className={style.desc}>{props.data.description}</p>
				<div className={style.btn}>
					<Button category="rounded" icon="chevron-right">
						{props.data.button.text}
					</Button>
				</div>
			</div>
		</div>
	);
};

export default CryptoItem;
