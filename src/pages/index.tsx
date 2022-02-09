import Header from "components/Header";
import Home from "components/pages/Home";
import { NextPage } from "next";
import Head from "next/head";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Neon - A conta digital certa pra cuidar do seu dinheiro</title>
      </Head>

      <Header />
      <Home />
    </>
  );
};

export default HomePage;
