import { FC } from "react";

import Hero from "components/Hero";
import Introduction from "components/Introduction";
import Banners from "components/Banners";

const Home: FC = () => {
  return (
    <div>
      <Hero />
      <Introduction />
      <Banners />
    </div>
  );
};

export default Home;
