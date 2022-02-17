import Title from "components/Title";
import { FC } from "react";

import { SocialProofContainer } from "./styles";

const SocialProof: FC = () => {
  return (
    <SocialProofContainer>
      <Title variant="md">Prático, fácil, moderno</Title>
      <Title variant="md">Você resolve tudo sem estresse 😊</Title>
    </SocialProofContainer>
  );
};

export default SocialProof;
