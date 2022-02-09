import { FC } from "react";
import Button from "components/Button";

import {
  HeroContainer,
  HeroContent,
  HeroInfoContainer,
  BubblesContainer,
  HeroCardContainer,
  HalfCicleContainer,
  CreditCardsContainer,
  CreditCardsImage,
} from "./styles";

import {
  CreditCardHero,
  AccountHero,
  MoneyHero,
  HalfCircleWhiteHero,
} from "components/Icons";

import Title from "components/Title";
import Bubble from "./components/Bubble";

const Hero: FC = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroInfoContainer>
          <Title opacity={0.5} variant="sm">
            Abra sua conta, é só baixar o app!
          </Title>

          <Title variant="xxl" maxWidth="630px">
            A conta digital certa pra cuidar bem do seu dinheiro
          </Title>

          <Button variant="primary">Abra sua conta digital</Button>

          <BubblesContainer>
            <Bubble icon={<CreditCardHero />}>Cartão sem anuidade</Bubble>
            <Bubble icon={<AccountHero />}>Conta digital 100% grátis</Bubble>
            <Bubble icon={<MoneyHero />}>Seu dinheiro rendendo mais</Bubble>
          </BubblesContainer>
        </HeroInfoContainer>

        <HeroCardContainer>
          <Title opacity={0.4} variant="xl">
            Banco 100% digital
          </Title>

          <HalfCicleContainer>
            <HalfCircleWhiteHero />
          </HalfCicleContainer>

          <CreditCardsContainer>
            <CreditCardsImage />
          </CreditCardsContainer>
        </HeroCardContainer>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
