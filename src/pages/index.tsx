import Home from "components/pages/Home";
import { NextPage } from "next";
import Head from "next/head";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Neon</title>
      </Head>
      <Home />
    </>
  );
};

export default HomePage;
