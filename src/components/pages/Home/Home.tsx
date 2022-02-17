import { FC } from "react";

import Hero from "components/Hero";
import Introduction from "components/Introduction";
import Banners from "components/Banners";
import SocialProof from "components/SocialProof";

const Home: FC = () => {
  return (
    <div>
      <Hero />
      <Introduction />
      <Banners />
      <SocialProof />
    </div>
  );
};

export default Home;
