// -- models
import cryptoCurrenciesModel from "@models/cryptoCurrencies";

// -- organisms
import Crypto from "@organisms/Crypto";

const CryptoCurrenciesWidget = () => {
	const { ready, data, error } = cryptoCurrenciesModel.list();

	return <Crypto ready={ready} data={data?.data} error={error} />;
};

export default CryptoCurrenciesWidget;
