import httpRequest from "infrastructure/api/httpRequest";
import ENDPOINT from "infrastructure/api/endPoint";

const handleList = () => {
	const { ready, data, error } = httpRequest.firstLoad({
		method: "get",
		url: ENDPOINT.PROFIT_INVESTMENTS,
	});

	return {
		ready,
		data,
		error,
	};
};

const profitInvestmentsModel = {
	list: handleList,
};

export default profitInvestmentsModel;
