import { FC } from "react";

import { Bubbles, InfoContainer } from "./styles";

import Button from "components/Button";
import Title from "components/Title";
import Bubble from "../Bubble";
import { AccountHero, CreditCardHero, MoneyHero } from "components/Icons";

const Info: FC = () => {
  return (
    <InfoContainer>
      <Title opacity={0.5} variant="sm">
        Abra sua conta, é só baixar o app!
      </Title>

      <Title variant="xxl" maxWidth="630px">
        A conta digital certa pra cuidar bem do seu dinheiro
      </Title>

      <Button variant="primary">Abra sua conta digital</Button>

      <Bubbles>
        <Bubble icon={<CreditCardHero />}>Cartão sem anuidade</Bubble>
        <Bubble icon={<AccountHero />}>Conta digital 100% grátis</Bubble>
        <Bubble icon={<MoneyHero />}>Seu dinheiro rendendo mais</Bubble>
      </Bubbles>
    </InfoContainer>
  );
};

export default Info;
