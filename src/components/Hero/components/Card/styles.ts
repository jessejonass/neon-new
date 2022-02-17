import styled, { css } from "styled-components";

export const CardContainer = styled.div`
  ${() => CardContainerResponsive()}
`;

export const HalfCircle = styled.div`
  position: absolute;
  bottom: -60px;

  svg {
    height: 480px;
  }

  ${() => HalfCircleResponsive()}
`;

export const CreditCardsContainer = styled.div`
  max-width: 100%;
  position: absolute;

  right: -20px;
  bottom: -60px;

  ${() => CreditCardsContainerResponsive()}
`;

export const CreditCardsImage = styled.img.attrs({
  src: "credits-card-hero.png",
})`
  height: 460px;

  ${() => CreditCardsImageResponsive()}
`;

// responsive
const CardContainerResponsive = () => css`
  h2 {
    margin-bottom: ${({ theme }) => theme.spacing.xxl}px;
  }

  @media (max-width: ${({ theme }) => theme.widths.sm}px) {
    h2 {
      display: none;
    }
  }
`;

const HalfCircleResponsive = () => css`
  @media (max-width: ${({ theme }) => theme.widths.xl}px) {
    svg {
      height: 420px;
    }
  }

  @media (max-width: ${({ theme }) => theme.widths.lg}px) {
    position: static;
  }

  @media (max-width: ${({ theme }) => theme.widths.sm}px) {
    svg {
      height: 240px;
    }
  }
`;

const CreditCardsContainerResponsive = () => css`
  @media (max-width: ${({ theme }) => theme.widths.xl}px) {
    right: 50px;
    bottom: -50px;
  }

  @media (max-width: ${({ theme }) => theme.widths.lg}px) {
    left: -10px;
    bottom: -30px;
  }

  @media (max-width: ${({ theme }) => theme.widths.sm}px) {
    left: 30px;
    bottom: -20px;
  }
`;

const CreditCardsImageResponsive = () => css`
  @media (max-width: ${({ theme }) => theme.widths.xl}px) {
    height: 380px;
  }

  @media (max-width: ${({ theme }) => theme.widths.sm}px) {
    height: 240px;
    max-width: 100%;
  }
`;
