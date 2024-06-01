//- core
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// -- widgets
import HeaderWidget from "@widgets/HeaderWidget";
import FooterWidget from "@widgets/FooterWidget";

const Default = ({ activeMenu, children }) => {
	// const { pathname } = useLocation();

	// useEffect(() => {
	// 	window.scrollTo(0, 0);
	// }, [pathname]);

	return (
		<>
			<HeaderWidget activeMenu={activeMenu} />
			<main className="main">{children}</main>
			<FooterWidget />
		</>
	);
};

export default Default;
