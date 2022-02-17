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
