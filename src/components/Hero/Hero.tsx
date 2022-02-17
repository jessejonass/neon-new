import { FC } from "react";

import { HeroContainer, HeroContent } from "./styles";

import Info from "./components/Info";
import Card from "./components/Card";

const Hero: FC = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <Info />
        <Card />
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
