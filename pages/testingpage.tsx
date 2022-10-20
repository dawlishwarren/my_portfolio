import { NextPage } from "next";
import Example from "../components/framerNav/Example";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";

const TestingPage: NextPage = () => {
	return (
		<>
			<Example />
			<Header />
		</>
	);
};

export default TestingPage;
