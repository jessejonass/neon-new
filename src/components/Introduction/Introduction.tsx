import { FC } from "react";

import {
  AppContainer,
  InfoContainer,
  InfoTitleContainer,
  IntroductionContainer,
  MoreContainer,
  MoreText,
} from "./styles";
import {
  InvestmentsIntroduction,
  NoAnnuityIntroduction,
  NoTaxesIntroduction,
  SmartphoneAppIntroduction,
} from "components/Icons";
import InfoItem from "./components/InfoItem";
import Title from "components/Title";
import Link from "components/Link";

const Introduction: FC = () => {
  return (
    <IntroductionContainer>
      <AppContainer>
        <SmartphoneAppIntroduction />
      </AppContainer>

      <InfoContainer>
        <InfoTitleContainer>
          <Title variant="md" maxWidth="480px">
            Resolva sua vida direto pelo app Neon
          </Title>
        </InfoTitleContainer>

        <InfoItem
          href="/"
          icon={<NoAnnuityIntroduction />}
          title="Cartão de crédito sem anuidade"
          subtitle="Conta digital com cartão de crédito sem anuidade e sem complicação"
        />

        <InfoItem
          href="/"
          icon={<NoTaxesIntroduction />}
          title="Sem taxas"
          subtitle="Transferências, boletos de depósito e outros serviços gratuitos"
        />

        <InfoItem
          href="/"
          icon={<InvestmentsIntroduction />}
          title="Mais investimentos"
          subtitle="Rendem mais que a poupança e você resgata quando quiser"
        />

        <Link href="/">
          <MoreContainer>
            <MoreText>Conheça outros produtos</MoreText>
          </MoreContainer>
        </Link>
      </InfoContainer>
    </IntroductionContainer>
  );
};

export default Introduction;
