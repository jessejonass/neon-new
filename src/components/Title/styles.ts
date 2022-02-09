import styled, { css } from "styled-components";
import { TitleProps, TitleVariants } from "./types";

export const TitleContainer = styled.div``;

export const TitleText = styled.h2<TitleProps>`
  font: 700 "Sofia Pro", sans-serif;
  line-height: 1.2;
  opacity: ${({ opacity }) => opacity};
  max-width: ${({ maxWidth }) => maxWidth};

  ${(props) => TitleVariant(props.variant)}
`;

const TitleVariant = (variant: TitleVariants) => {
  const table = {
    sm: css`
      font-size: ${({ theme }) => theme.sizes.xl};
    `,

    md: css`
      font-size: 2.5rem;
    `,

    lg: css`
      font-size: 3rem;
    `,

    xl: css`
      font-size: 3.5rem;
    `,

    xxl: css`
      font-size: 4rem;
    `,
  };

  return table[variant];
};
