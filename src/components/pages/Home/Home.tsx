import { FC } from "react";

import Hero from "components/Hero";
import Introduction from "components/Introduction";

const Home: FC = () => {
  return (
    <div>
      <Hero />
      <Introduction />
    </div>
  );
};

export default Home;
