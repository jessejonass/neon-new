import { FC } from "react";

import Title from "components/Title";
import { HalfCircleWhiteHero } from "components/Icons";
import {
  CardContainer,
  CreditCardsContainer,
  CreditCardsImage,
  HalfCircle,
} from "./styles";

const Card: FC = () => {
  return (
    <CardContainer>
      <Title opacity={0.4} variant="xl">
        Banco 100% digital
      </Title>

      <HalfCircle>
        <HalfCircleWhiteHero />
      </HalfCircle>

      <CreditCardsContainer>
        <CreditCardsImage />
      </CreditCardsContainer>
    </CardContainer>
  );
};

export default Card;
