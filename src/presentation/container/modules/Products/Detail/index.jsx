// -- core
import { useState } from "react";

// -- tempaltes
import Default from "@templates/Default";

// -- states
import useStateHeader from "core/states/header";

const ProductsDetail = (props) => {
	const { setMenu } = useStateHeader();

	useState(() => {
		setMenu("productsDetail");
	}, []);

	return (
		<Default activeMenu="products">
			<div className="pdetail">
				<div className="container">
					<div className="pdetail__inner">
						<div className="pdetail__img">
							<img src={props.detail.image} alt={props.detail.title} />
						</div>
						<div className="pdetail__txt">
							<p className="pdetail__cat">{props.detail.category}</p>
							<h1 className="pdetail__title">{props.detail.title}</h1>
							<p className="pdetail__rating">
								⭐{props.detail.rating.rate} ({props.detail.rating.count}{" "}
								rating)
							</p>
							<p className="pdetail__price">${props.detail.price}</p>
							<p className="pdetail__desc">{props.detail.description}</p>
						</div>
					</div>
				</div>
			</div>
		</Default>
	);
};

export default ProductsDetail;
