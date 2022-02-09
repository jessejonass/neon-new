import { FC } from "react";

import SvgChevronRight from "components/Icons/ChevronRight";
import Title from "components/Title";
import Link from "components/Link";

import {
  ChevronContainer,
  IconContainer,
  InfoItemContainer,
  Subtitle,
  TextsContainer,
} from "./styles";
import { InfoItemProps } from "./types";

const InfoItem: FC<InfoItemProps> = ({
  icon,
  title,
  subtitle,
  href,
  ...props
}) => {
  return (
    <Link href={href}>
      <InfoItemContainer {...props}>
        <IconContainer>{icon}</IconContainer>
        <TextsContainer>
          <Title variant="sm">{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </TextsContainer>

        <ChevronContainer>
          <SvgChevronRight />
        </ChevronContainer>
      </InfoItemContainer>
    </Link>
  );
};

export default InfoItem;
