import gsap from "gsap";
import { FC, useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { BannersContainer } from "./styles";

import Download from "./components/Download";
import Account from "./components/Account";

const Banners: FC = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.from(".download__container", {
      y: 200,
      duration: 1.5,
      opacity: 0,
      scrollTrigger: {
        trigger: ".banners__container",
        start: "top 60%",
      },
    });

    gsap.to(".download__container", {
      y: 0,
      duration: 1.5,
      opacity: 1,
      scrollTrigger: {
        trigger: ".banners__container",
        start: "top 60%",
      },
    });

    gsap.from(".pj__container", {
      y: 200,
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".banners__container",
        start: "top 60%",
      },
    });

    gsap.to(".pj__container", {
      y: 0,
      opacity: 1,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".banners__container",
        start: "top 60%",
      },
    });
  }, []);

  return (
    <BannersContainer className="banners__container">
      <Download />
      <Account />
    </BannersContainer>
  );
};

export default Banners;
