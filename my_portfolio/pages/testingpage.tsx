import { NextPage } from "next";
import MainHero from "../components/mainHero/mainHero";
import Socials from "../components/socials/Socials";

const CanvasPage: NextPage = () => {
	return (
		<>
			<MainHero />
			<Socials colorBurn={true} />;
		</>
	);
};

export default CanvasPage;
