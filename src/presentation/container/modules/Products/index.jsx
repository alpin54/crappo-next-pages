import { useState } from "react";

// -- tempaltes
import Default from "@templates/Default";

// -- states
import useStateHeader from "core/states/header";

// -- widgets
import HeroBannerWidget from "@widgets/HeroBannerWidget";
import SubsribeWidget from "@widgets/SubscribeWidget";

const Products = () => {
	const { setMenu } = useStateHeader();

	useState(() => {
		setMenu("");
	}, []);

	return (
		<Default activeMenu="products">
			<HeroBannerWidget />
			<SubsribeWidget />
		</Default>
	);
};

export default Products;
