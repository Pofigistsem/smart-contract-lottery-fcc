import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import LotteryEntrance from "../components/LotteryEntrance";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="h-screen bg-white text-gray-800 dark:bg-gray-900 dark:text-white">
      <Head>
        <title>Smart Contract Lottery</title>
        <meta name="description" content="Our smart contract lottery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <LotteryEntrance />
    </div>
  );
};

export default Home;
