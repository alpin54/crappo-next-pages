import { useState } from "react";

// -- tempaltes
import Default from "@templates/Default";

// -- states
import useStateHeader from "core/states/header";

// -- widgets
import HeroBannerWidget from "@widgets/HeroBannerWidget";
import NumbersWidget from "@widgets/NumbersWidget";
import WhyCrappoWidget from "@widgets/WhyCrappoWidget";
import SubsribeWidget from "@widgets/SubscribeWidget";
// import CalculateWidget from "@widgets/CalculateWidget";
// import CryptoCurrenciesWidget from "@widgets/CryptoCurrenciesWidget";
// import InvestSmartWidget from "@widgets/InvestSmartWidget";
// import StatisticsWidget from "@widgets/StatisticsWidget";
// import ProfitInvestmentsWidget from "@widgets/ProfitInvestmentsWidget";

const Home = () => {
	const { setMenu } = useStateHeader();

	useState(() => {
		setMenu("");
	}, []);

	return (
		<Default activeMenu="home">
			<HeroBannerWidget />
			<NumbersWidget />
			<WhyCrappoWidget />
			{/* <CalculateWidget /> */}
			{/* <CryptoCurrenciesWidget /> */}
			{/* <InvestSmartWidget /> */}
			{/* <StatisticsWidget /> */}
			{/* <ProfitInvestmentsWidget /> */}
			<SubsribeWidget />
		</Default>
	);
};

export default Home;
