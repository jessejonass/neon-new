import { FC } from "react";

import { HomeContainer } from "./styles";

import Hero from "components/Hero";
import Introduction from "components/Introduction";
import Banners from "components/Banners";
import SocialProof from "components/SocialProof";

const Home: FC = () => {
  return (
    <HomeContainer>
      <Hero />
      <Introduction />
      <Banners />
      <SocialProof />
    </HomeContainer>
  );
};

export default Home;
