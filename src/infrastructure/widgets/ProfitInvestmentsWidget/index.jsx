// -- core
import { useEffect, useState } from "react";

// -- api
import httpRequest from "@api/httpRequest";
import ENDPOINT from "@api/endPoint";

// -- model
// import profitInvestmentsModel from "@models/profitInvestments";

// -- organisms
import ProfitInvestments from "@organisms/ProfitInvestments";

const ProfitInvestmentsWidget = () => {
	// const { ready, data, error } = profitInvestmentsModel.list();
	const [callProfitInvestmentsData, setCallProfitInvestmentsData] =
		useState(false);
	const [profitInvestmentsdata, setProfitInvestmentsData] = useState(null);

	const handleScroll = () => {
		const scrollTop =
			window.pageYOffset ||
			document.documentElement.scrollTop ||
			document.body.scrollTop;
		const whyCrappo = document.getElementById("why-crappo");
		const startScroll = whyCrappo.offsetTop + whyCrappo.clientHeight / 2;

		if (scrollTop > startScroll && !callProfitInvestmentsData) {
			setCallProfitInvestmentsData(true);
		}
	};

	const handleProfitInvestmentsData = async () => {
		const { ready, data, error } = await httpRequest({
			method: "get",
			url: ENDPOINT.PROFIT_INVESTMENTS,
		});
		setProfitInvestmentsData(data?.data);
	};

	useEffect(() => {
		if (callProfitInvestmentsData) {
			handleProfitInvestmentsData();
		}
	}, [callProfitInvestmentsData]);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		// cleaning even listener on component unmount
		return () => {
			window.addEventListener("scroll", handleScroll);
		};
	}, []);

	return <ProfitInvestments data={profitInvestmentsdata} />;

	// return <ProfitInvestments ready={ready} data={data?.data} error={error} />;
};

export default ProfitInvestmentsWidget;
