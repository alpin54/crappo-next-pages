// -- core
import { useEffect, useState } from "react";

// -- api
import httpRequest from "@api/httpRequest";
import ENDPOINT from "@api/endPoint";

// -- organisms
import Statistics from "@organisms/Statistics";

const StatisticsWidget = () => {
	// state
	const [data, setData] = useState({
		title: "",
		image: "",
		description: "",
		button: {
			to: "",
			text: "",
		},
	});

	// call API
	const {
		ready: getReady,
		data: getData,
		error: getError,
	} = httpRequest({
		url: ENDPOINT.STATISTICS,
		method: "get",
	});

	// use effect
	useEffect(() => {
		if (getData?.data) {
			setData(getData?.data);
		}
	}, [getData]);

	return <Statistics ready={getReady} data={data} error={getError} />;
};

export default StatisticsWidget;
