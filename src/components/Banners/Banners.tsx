import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { FC, useEffect } from "react";

import {
  BannersContainer,
  DownloadContainer,
  DownloadLogoContainer,
  DownloadSubtitle,
  PJBannerAccountContainer,
  PJBannerCardContainer,
  PJBannerCardSubtitle,
  PJBannerCardText,
  PJBannersButtonsContainer,
} from "./styles";
import {
  AppleLogo,
  CardBanner,
  GooglePlayLogo,
  LogoSingleWhite,
} from "components/Icons";
import Title from "components/Title";
import DownloadLink from "components/DownloadLink";
import Button from "components/Button";

const Banners: FC = () => {
  gsap.registerPlugin(ScrollTrigger);

  // useEffect(() => {
  //   gsap.to(".download__container", {
  //     x: 800,
  //     duration: 10,
  //     scrollTrigger: {
  //       trigger: ".banners__container",
  //       markers: true,
  //       start: "bottom bottom",
  //       end: "bottom 80px",
  //       scrub: true,
  //     },
  //   });
  // }, []);

  return (
    <BannersContainer className="banners__container">
      <DownloadContainer className="download__container">
        <DownloadLogoContainer>
          <LogoSingleWhite />
        </DownloadLogoContainer>

        <Title variant="sm">Baixe nosso app</Title>
        <DownloadSubtitle>
          Que tal abrir uma conta digital para ver como a gente faz a sua vida
          muito mais simples?
        </DownloadSubtitle>

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
      </DownloadContainer>

      <PJBannerAccountContainer>
        <PJBannerCardContainer>
          <Title variant="md">Neon Pejota</Title>

          <PJBannerCardSubtitle>
            Contas digitais PJ gratuitas para decolar seu negócio!
          </PJBannerCardSubtitle>

          <PJBannerCardText>
            As melhores contas para fazer pagamentos, compras e receber dos seus
            clientes.
          </PJBannerCardText>

          <PJBannersButtonsContainer>
            <Button variant="primary">Sou MEI</Button>
            <Button variant="primary">Sou ME</Button>
          </PJBannersButtonsContainer>

          <CardBanner />
        </PJBannerCardContainer>
      </PJBannerAccountContainer>
    </BannersContainer>
  );
};

export default Banners;
