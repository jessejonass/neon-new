import styled, { css } from "styled-components";

export const HeroContainer = styled.section`
  display: flex;
  justify-content: center;

  background: ${({ theme }) => theme.colors.gradient};
  color: ${({ theme }) => theme.colors.bg};
`;

export const HeroContent = styled.div`
  position: relative;
  width: ${({ theme }) => theme.widths.xl}px;

  display: flex;
  justify-content: space-around;

  padding-top: ${({ theme }) => theme.spacing.xxl * 2}px;
  padding-bottom: ${({ theme }) => theme.spacing.xxl * 3}px;

  ${() => HeroContentResponsive()}
`;

export const HeroInfoContainer = styled.div`
  h2 {
    margin-bottom: ${({ theme }) => theme.spacing.xl}px;
  }

  button {
    margin-bottom: ${({ theme }) => theme.spacing.xl * 2}px;
  }

  ${() => HeroInfoContainerResponsive()}
`;

export const HeroCardContainer = styled.div`
  ${() => HeroCardContainerResponsive()}
`;

export const HalfCicleContainer = styled.div`
  position: absolute;
  bottom: -60px;

  svg {
    height: 480px;
  }

  ${() => HalfCicleContainerResponsive()}
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

export const BubblesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg * 2}px;

  ${() => BubblesContainerResponsive()}
`;

// responsivity
const HeroContentResponsive = () => css`
  @media (max-width: ${({ theme }) => theme.widths.lg}px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: ${({ theme }) => theme.spacing.xl * 2}px;
    padding-bottom: 0;
  }
`;

const HeroInfoContainerResponsive = () => css`
  @media (max-width: ${({ theme }) => theme.widths.xl}px) {
    h2 {
      margin-bottom: ${({ theme }) => theme.spacing.lg}px;
    }

    button {
      margin-bottom: ${({ theme }) => theme.spacing.lg * 2}px;
    }
  }

  @media (max-width: ${({ theme }) => theme.widths.lg}px) {
    button {
      margin: 0 auto;
      margin-bottom: ${({ theme }) => theme.spacing.xl * 1}px;
    }
  }
`;

const HeroCardContainerResponsive = () => css`
  h2 {
    margin-bottom: ${({ theme }) => theme.spacing.xxl}px;
  }

  @media (max-width: ${({ theme }) => theme.widths.sm}px) {
    h2 {
      display: none;
    }
  }
`;

const BubblesContainerResponsive = () => css`
  @media (max-width: ${({ theme }) => theme.widths.sm}px) {
    flex-direction: column;
    align-items: flex-start;
    max-width: 260px;
    margin: 0 auto;
  }
`;

const HalfCicleContainerResponsive = () => css`
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
