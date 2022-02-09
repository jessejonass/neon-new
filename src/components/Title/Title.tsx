import { FC } from "react";

import { TitleContainer, TitleText } from "./styles";
import { TitleProps } from "./types";

const Title: FC<TitleProps> = ({
  variant,
  opacity = 1,
  children,
  maxWidth = "100%",
  ...props
}) => {
  return (
    <TitleContainer {...props}>
      <TitleText opacity={opacity} maxWidth={maxWidth} variant={variant}>
        {children}
      </TitleText>
    </TitleContainer>
  );
};

export default Title;
