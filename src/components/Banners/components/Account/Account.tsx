import { FC } from "react";

import {
  AccountContainer,
  Buttons,
  Card,
  CardSubtitle,
  CardText,
} from "./styles";

import Title from "components/Title";
import Button from "components/Button";
import { CardBanner } from "components/Icons";

const Account: FC = () => {
  return (
    <AccountContainer className="pj__container">
      <Card>
        <Title variant="md">Neon Pejota</Title>

        <CardSubtitle>
          Contas digitais PJ gratuitas para decolar seu negócio!
        </CardSubtitle>

        <CardText>
          As melhores contas para fazer pagamentos, compras e receber dos seus
          clientes.
        </CardText>

        <Buttons>
          <Button variant="primary">Sou MEI</Button>
          <Button variant="primary">Sou ME</Button>
        </Buttons>

        <CardBanner />
      </Card>
    </AccountContainer>
  );
};

export default Account;
