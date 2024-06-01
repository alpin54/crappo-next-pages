// -- core
import Image from "next/image";

// -- style
import style from "./style.module.scss";

// -- atom
import Button from "@atoms/Button";

const HeroBannerItem = (props) => {
	return (
		<div className={style.banner}>
			<div className={style.img}>
				<img
					width={600}
					height={600}
					className={style.el}
					src={props.img ? props.img : ""}
					alt={props.title ? props.title : ""}
				/>
			</div>
			<div className={style.text}>
				<div className={style.sale}>
					<p className={style.saleTitle}>{props.sale.title}</p>
					<p className={style.saleDesc}>{props.sale.desc}</p>
				</div>
				<h2 className={style.title}>{props.title}</h2>
				<p className={style.desc}>{props.desc}</p>
				<div className={style.btn}>
					<Button
						variant="accent"
						category="icon"
						href={props.btn.to}
						icon="chevron-right"
					>
						{props.btn.text}
					</Button>
				</div>
			</div>
		</div>
	);
};

export default HeroBannerItem;
