import { useState } from "react";
import Link from "next/link";

// -- tempaltes
import Default from "@templates/Default";

// -- api
import httpRequest from "@api/httpRequest";
import ENDPOINT from "@api/endPoint";

// -- states
import useStateHeader from "core/states/header";

const Products = () => {
	const {
		ready,
		data: productData,
		error,
	} = httpRequest.firstLoad({
		method: "get",
		url: ENDPOINT.PRODUCTS,
	});

	const { setMenu } = useStateHeader();

	useState(() => {
		setMenu("products");
	}, []);

	return (
		<Default activeMenu="products">
			<div className="product">
				<div className="container">
					<div className="product__list">
						{productData !== null &&
							productData.map((val, idx) => (
								<div className="product__item" key={idx}>
									<div className="product__box">
										<Link
											href={`/products/${val.id}`}
											className="product__link"
										>
											{val.title}
										</Link>
										<div className="product__img">
											<img src={val.image} alt={val.title} />
										</div>
										<div className="product__txt">
											<h6 className="product__title">{val.title}</h6>
											<p className="product__price">${val.price}</p>
										</div>
									</div>
								</div>
							))}
					</div>
				</div>
			</div>
		</Default>
	);
};

export default Products;
