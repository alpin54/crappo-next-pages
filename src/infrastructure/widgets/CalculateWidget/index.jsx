// -- core
import { useEffect, useState } from "react";

// -- api
import httpRequest from "@api/httpRequest";
import ENDPOINT from "@api/endPoint";

// -- organisms
import Calculate from "@organisms/Calculate";

const CalculateWidget = () => {
	// state
	const [data, setData] = useState([]);

	// call API
	const {
		data: getData,
		error: getError,
		ready: getReady,
	} = httpRequest({
		url: ENDPOINT.CALCULATE,
		method: "get",
	});

	// use effect
	useEffect(() => {
		if (getData?.data?.length) {
			let transformData = [];
			getData?.data.forEach((val) => {
				transformData.push({
					value: val.value,
					text: val.unit,
				});
			});

			setData(transformData);
		}
	}, [getData]);

	return <Calculate data={data} error={getError} ready={getReady} />;
};

export default CalculateWidget;
