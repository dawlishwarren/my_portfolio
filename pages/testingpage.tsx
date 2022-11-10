import { NextPage } from 'next';
import styles from '../components/modal/modal.module.scss';
import Layout from '../components/layout/Layout';
import { useEffect, useRef, useState } from 'react';

const TestingPage: NextPage = () => {
	const [modalOpen, setModalOpen] = useState(false);

	const functionVar = useRef({});
	const ContextValue = {};
	return <Layout title='Alex Warren | Frontend Developer'>Hello world</Layout>;
};

export default TestingPage;
