// -- core
import { useEffect, useState } from "react";

// -- api
import httpRequest from "@api/httpRequest";
import ENDPOINT from "@api/endPoint";

// -- model
// import investSmartModel from "@models/investSmart";

// -- organisms
import InvestSmart from "@organisms/InvestSmart";

const InvestSmartWidget = () => {
	// const { ready, data, error } = investSmartModel.list();
	const [callInvestData, setCallInvestData] = useState(false);
	const [investdata, setInvestData] = useState(null);

	const handleScroll = () => {
		const scrollTop =
			window.pageYOffset ||
			document.documentElement.scrollTop ||
			document.body.scrollTop;
		const heroBanner = document.getElementById("hero-banner");
		const startScroll = heroBanner.offsetTop + heroBanner.clientHeight / 2;

		if (scrollTop > startScroll && !callInvestData) {
			setCallInvestData(true);
		}
	};

	const handleInvestData = async () => {
		const { ready, data, error } = await httpRequest({
			method: "get",
			url: ENDPOINT.INVEST_SMART,
		});
		setInvestData(data?.data);
	};

	useEffect(() => {
		if (callInvestData) {
			handleInvestData();
		}
	}, [callInvestData]);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		// cleaning even listener on component unmount
		return () => {
			window.addEventListener("scroll", handleScroll);
		};
	}, []);

	return <InvestSmart data={investdata} />;
	// return <InvestSmart ready={ready} data={data?.data} error={error} />;
};

export default InvestSmartWidget;
