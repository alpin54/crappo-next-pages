import httpRequest from "infrastructure/api/httpRequest";
import ENDPOINT from "infrastructure/api/endPoint";

const handleList = () => {
	const { ready, data, error } = httpRequest.firstLoad({
		method: "get",
		url: ENDPOINT.STATISTICS,
	});

	return {
		ready,
		data,
		error,
	};
};

const statisticsModel = {
	list: handleList,
};

export default statisticsModel;
