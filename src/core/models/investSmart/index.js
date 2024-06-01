import httpRequest from "infrastructure/api/httpRequest";
import ENDPOINT from "infrastructure/api/endPoint";

const handleList = () => {
	const { ready, data, error } = httpRequest({
		method: "get",
		url: ENDPOINT.INVESTSMART,
	});

	return {
		ready,
		data,
		error,
	};
};

const investSmartModel = {
	list: handleList,
};

export default investSmartModel;
