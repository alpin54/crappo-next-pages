// -- core
import { useEffect, useState } from "react";

// -- api
import httpRequest from "@api/httpRequest";
import ENDPOINT from "@api/endPoint";

// -- organisms
import InvestSmart from "@organisms/InvestSmart";

const InvestSmartWidget = () => {
	// state
	const [data, setData] = useState({
		title: "",
		section: {
			title: "",
			description: "",
			images: [],
			code: "",
			button: {
				to: "",
				text: "",
			},
		},
	});

	// call API
	const {
		ready: getReady,
		data: getData,
		error: getError,
	} = httpRequest({
		url: ENDPOINT.INVEST_SMART,
		method: "get",
	});

	// use effect
	useEffect(() => {
		if (getData?.data) {
			setData(getData?.data);
		}
	}, [getData]);

	return <InvestSmart ready={getReady} data={data} error={getError} />;
};

export default InvestSmartWidget;
