import { FC } from "react";

import { BubbleContainer, BubbleCircle, BubbleText } from "./styles";
import { BubbleProps } from "./types";

const Bubble: FC<BubbleProps> = ({ icon, children, ...props }) => {
  return (
    <BubbleContainer {...props}>
      <BubbleCircle>{icon}</BubbleCircle>
      <BubbleText>{children}</BubbleText>
    </BubbleContainer>
  );
};

export default Bubble;
