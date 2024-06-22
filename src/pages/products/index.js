// -- api
import httpRequest from "@api/httpRequest";
import ENDPOINT from "@api/endPoint";

// -- products module
import Products from "@modules/Products";

const getServerSideProps = async () => {
	const { data: productsData, error: productsError } = await httpRequest({
		method: "get",
		url: ENDPOINT.PRODUCTS,
	});

	return {
		props: {
			product: productsData,
		},
	};
};

// =============================
// Products Pages
// =============================

const ProductsPage = (props) => {
	return <Products {...props} />;
};

export { getServerSideProps };
export default ProductsPage;
