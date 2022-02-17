import { FC } from "react";

import {
  AppContainer,
  DownloadContainer,
  InfoContainer,
  Logo,
  Subtitle,
} from "./styles";

import Title from "components/Title";
import DownloadLink from "components/DownloadLink";

import {
  AppFuncionalities,
  AppleLogo,
  GooglePlayLogo,
  LogoSingleWhite,
} from "components/Icons";

const Download: FC = () => {
  return (
    <DownloadContainer>
      <AppContainer>
        <AppFuncionalities />
      </AppContainer>

      <InfoContainer className="download__container">
        <Logo>
          <LogoSingleWhite />
        </Logo>

        <Title variant="sm">Baixe nosso app</Title>
        <Subtitle>
          Que tal abrir uma conta digital para ver como a gente faz a sua vida
          muito mais simples?
        </Subtitle>

        <DownloadLink
          href="/"
          icon={<AppleLogo />}
          downloadSourceText="Apple Store"
        />

        <DownloadLink
          href="/"
          icon={<GooglePlayLogo />}
          downloadSourceText="Google Play"
        />
      </InfoContainer>
    </DownloadContainer>
  );
};

export default Download;
