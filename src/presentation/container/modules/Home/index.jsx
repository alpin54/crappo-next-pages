// -- core
import { useState } from "react";

// -- tempaltes
import Default from "@templates/Default";

// -- states
import useStateHeader from "core/states/header";

// -- widgets
// import HeroBannerWidget from "@widgets/HeroBannerWidget";
// import NumbersWidget from "@widgets/NumbersWidget";
// import WhyCrappoWidget from "@widgets/WhyCrappoWidget";
import CalculateWidget from "@widgets/CalculateWidget";
import CryptoCurrenciesWidget from "@widgets/CryptoCurrenciesWidget";
import InvestSmartWidget from "@widgets/InvestSmartWidget";
import StatisticsWidget from "@widgets/StatisticsWidget";
import ProfitInvestmentsWidget from "@widgets/ProfitInvestmentsWidget";
import SubsribeWidget from "@widgets/SubscribeWidget";

// -- organisms
import HeroBanner from "@organisms/HeroBanner";
import Numbers from "@organisms/Numbers";
import WhyCrappo from "@organisms/WhyCrappo";

const Home = (props) => {
	const { heroBanner, numbers, whyCrappo } = props;
	const heroBannerData = JSON.parse(heroBanner.data);
	const heroBannerError = JSON.parse(heroBanner.error);
	const numbersData = JSON.parse(numbers.data);
	const numbersError = JSON.parse(numbers.error);
	const whyCrappoData = JSON.parse(whyCrappo.data);
	const whyCrappoError = JSON.parse(whyCrappo.error);

	const { setMenu } = useStateHeader();

	useState(() => {
		setMenu("");
	}, []);

	return (
		<Default activeMenu="home">
			<HeroBanner
				ready={true}
				data={heroBannerData.data}
				error={heroBannerError}
			/>
			<Numbers ready={true} data={numbersData.data} error={numbersError} />
			<WhyCrappo
				ready={true}
				data={whyCrappoData.data}
				error={whyCrappoError}
			/>
			{/* <HeroBannerWidget /> */}
			{/* <NumbersWidget /> */}
			{/* <WhyCrappoWidget /> */}
			<CalculateWidget />
			<CryptoCurrenciesWidget />
			<InvestSmartWidget />
			<StatisticsWidget />
			<ProfitInvestmentsWidget />
			<SubsribeWidget />
		</Default>
	);
};

export default Home;
